import { Draft } from "immer";
import { Profile } from "oscal";
import { CatalogOrProfileReference, ControlID } from "oscal/dist/profile";

export const excludeControl = (import_profile: CatalogOrProfileReference, control_id: ControlID, with_child_controls?: "yes" | "no" | undefined) => {
    return (baselineDraft: Draft<Profile>) => {
        const profileIndex = baselineDraft.imports.findIndex(({ href }) => href === import_profile);
        const profile = baselineDraft.imports[profileIndex];

        const alteration = baselineDraft.modify?.alters?.find(alter => alter.control_id && alter.control_id === control_id);
        if (alteration) {
            baselineDraft.modify!.alters = baselineDraft.modify!.alters!.filter(alter => alter.control_id && alter.control_id !== control_id) as any;
        }

        if (profile) {
            const { include } = profile || { include: { calls: [] } };
            const control_ids = include?.calls?.map((x) => x ? x.control_id : "");
            if (control_ids?.includes(control_id)) {
                const calls = baselineDraft.imports[profileIndex].include!.calls?.filter(x => x.control_id && x.control_id === control_id) || [];
                if (calls?.length > 0) {
                    calls.forEach((call) => {
                        const index = baselineDraft.imports[profileIndex].include!.calls!.findIndex(x => x.control_id === call.control_id);
                        if (index !== -1) {
                            delete baselineDraft.imports[profileIndex].include!.calls![index];
                        }
                    })
                    baselineDraft.imports[profileIndex].include!.calls = baselineDraft.imports[profileIndex].include?.calls?.filter(x => x !== null) as any;
                }
            }
        }
    }
}
