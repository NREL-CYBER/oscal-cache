import { Draft } from "immer";
import { Profile } from "oscal";
import { CatalogOrProfileReference, ControlIdentifier } from "oscal";
import { profileInclusions } from "src/queries";

export const excludeControl = (import_profile: CatalogOrProfileReference, control_id: ControlIdentifier, with_child_controls?: "yes" | "no" | undefined) => {
    return (baselineDraft: Draft<Profile>) => {
        const profileIndex = baselineDraft.imports.findIndex(({ href }) => href === import_profile);
        const profile = baselineDraft.imports[profileIndex];

        const alteration = baselineDraft.modify?.alters?.find(alter => alter.control_id && alter.control_id === control_id);
        if (alteration) {
            baselineDraft.modify!.alters = baselineDraft.modify!.alters!.filter(alter => alter.control_id && alter.control_id !== control_id) as any;
        }

        if (profile) {
            const { exclude_controls, include_all, include_controls } = profile;
            const control_ids = profileInclusions(baselineDraft);
            if (control_ids?.includes(control_id)) {
                if (include_controls) {
                    include_controls.forEach((call) => {
                        const matching_call = include_controls?.find(x => x.with_ids?.includes(control_id));
                        const with_id_call_index = matching_call && matching_call.with_ids?.findIndex(x => x === control_id) || -1;
                        if (with_id_call_index !== -1) {
                            delete matching_call?.with_ids![with_id_call_index];
                        }
                    })
                }
            }
        }
    }
}
