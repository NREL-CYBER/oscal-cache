import { Draft } from "immer";
import { CatalogOrProfileReference, ControlIdentifier, Profile } from "oscal";
import { profileInclusions } from "src/queries";

export const includeControl = (import_profile: CatalogOrProfileReference, control_id: ControlIdentifier, statement_ids?: string[]) => {
    return (baselineDraft: Draft<Profile>) => {
        const profileIndex = baselineDraft.imports.findIndex(x => x.href === import_profile);
        const profile = baselineDraft.imports[profileIndex];
        if (profile) {
            const { include_controls } = profile || { include_controls: [] };
            const control_ids = profileInclusions(baselineDraft);

            if (control_ids?.includes(control_id)) {
                //This Control ID has been included in our profile already
                //Since we just trying to include a control, we can just exit the function

            } else if (include_controls) {
                const with_ids_element = baselineDraft.imports[profileIndex].include_controls?.find(x => typeof x.with_ids !== "undefined");
                if (with_ids_element) {
                    with_ids_element.with_ids?.push(control_id)
                }
            } else {
                baselineDraft.imports[profileIndex].include_controls = [{
                    with_ids: [control_id]
                }]
            }
        } else {
            // Profile doesn't exist yet.
            // this shouldn't really happen.
            // if it does lets create a new profile.
            baselineDraft.imports.push({ href: import_profile, include_controls: [{ with_ids: [control_id] }] })
        }
    }
}
