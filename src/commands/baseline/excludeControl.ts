import { Draft } from "immer";
import { Profile } from "oscal";
import { CatalogOrProfileReference, ControlIdentifier } from "oscal";
import { profileInclusions } from "../../queries";


export const excludeControl = (import_profile: CatalogOrProfileReference, control_id: ControlIdentifier, with_child_controls?: "yes" | "no" | undefined) => {
    return (baselineDraft: Draft<Profile>) => {
        const profileIndex = baselineDraft.imports.findIndex(({ href }) => href === import_profile);
        const profile = baselineDraft.imports[profileIndex];
        if (typeof baselineDraft.modify === 'undefined') {
            baselineDraft.modify = {}
        }
        baselineDraft.modify.alters = baselineDraft?.modify?.alters?.filter(alter => {
            if (alter.control_id && alter.control_id.includes(control_id) && with_child_controls === "yes") {
                return false
            } else if (alter.control_id && alter.control_id === control_id)
                return false;
            else {
                return true;
            }
        });

        if (profile) {
            const control_ids = profileInclusions(baselineDraft).filter(Boolean);
            if (control_ids?.includes(control_id)) {
                let { include_controls } = profile;
                if (include_controls) {
                    include_controls = include_controls.map(({ with_ids, matching, with_child_controls }, i) => {
                        with_ids = with_ids?.filter(x => x !== control_id)
                        return { with_child_controls, with_ids, matching }
                    })
                    baselineDraft.imports[profileIndex].include_controls = include_controls;
                }
            }
        }
    }
}