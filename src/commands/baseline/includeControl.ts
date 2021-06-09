import { Draft } from "immer";
import { CatalogOrProfileReference, ControlIdentifier, Profile } from "oscal";

export const includeControl = (import_profile: CatalogOrProfileReference, control_id: ControlIdentifier, statement_ids?: string[]) => {
    return (baselineDraft: Draft<Profile>) => {
        const profileIndex = baselineDraft.imports.findIndex(x => x.href === import_profile);
        const profile = baselineDraft.imports[profileIndex];
        if (profile) {
            const { include_controls } = profile || { include_controls: [] };
            const control_ids = include_controls && include_controls.map(x => x ? x.control_id : "") || [];

            if (control_ids?.includes(control_id)) {
                //This Control ID has been included in our profile already
                //Since we just trying to include a control, we can just exit the function

            } else if (include_controls) {
                baselineDraft.imports[profileIndex].include_controls!.push({ control_id, statement_ids });
            } else {
                baselineDraft.imports[profileIndex].include_controls = [{ control_id }];
            }
        } else {
            // Profile doesn't exist yet.
            // this shouldn't really happen.
            // if it does lets create a new profile.
            baselineDraft.imports.push({ href: import_profile, include_controls: [{ control_id, statement_ids }] })
        }
    }
}
