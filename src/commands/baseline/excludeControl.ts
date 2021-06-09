import { Draft } from "immer";
import { Profile } from "oscal";
import { CatalogOrProfileReference, ControlIdentifier } from "oscal";

export const excludeControl = (import_profile: CatalogOrProfileReference, control_id: ControlIdentifier, with_child_controls?: "yes" | "no" | undefined) => {
    return (baselineDraft: Draft<Profile>) => {
        const profileIndex = baselineDraft.imports.findIndex(({ href }) => href === import_profile);
        const profile = baselineDraft.imports[profileIndex];

        const alteration = baselineDraft.modify?.alters?.find(alter => alter.control_id && alter.control_id === control_id);
        if (alteration) {
            baselineDraft.modify!.alters = baselineDraft.modify!.alters!.filter(alter => alter.control_id && alter.control_id !== control_id) as any;
        }

        if (profile) {
            const { exclude_controls, include_all, include_controls } = profile || { include: { calls: [] } };
            const control_ids = include_controls?.map((x) => x ? x.control_id : "");
            if (control_ids?.includes(control_id)) {
                const calls = baselineDraft.imports[profileIndex].include_controls?.filter(x => x.control_id && x.control_id === control_id) || [];
                if (calls?.length > 0) {
                    calls.forEach((call) => {
                        const index = baselineDraft.imports[profileIndex].include_controls!.findIndex(x => x.control_id === call.control_id);
                        if (index !== -1) {
                            delete baselineDraft.imports[profileIndex].include_controls![index];
                        }
                    })
                    baselineDraft.imports[profileIndex].include_controls = baselineDraft.imports[profileIndex].include_controls?.filter(x => x !== null) as any;
                }
            }
        }
    }
}
