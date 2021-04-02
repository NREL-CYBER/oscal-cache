import { Draft } from "immer";
import { Profile } from "oscal";
import { CatalogOrProfileReference, ControlID } from "oscal/dist/profile";

const includeControl = (import_profile: CatalogOrProfileReference, control_id: ControlID, with_child_controls?: "yes" | "no" | undefined) => {
    return (baselineDraft: Draft<Profile>) => {
        const profileIndex = baselineDraft.imports.findIndex(x => x.href === import_profile);
        const profile = baselineDraft.imports[profileIndex];
        if (profile) {
            const { include } = profile || { include: { calls: [] } };
            const control_ids = include?.calls?.map(x => x ? x.control_id : "");

            if (control_ids?.includes(control_id)) {
                //This Control ID has been included in our profile already
                //Since we just trying to include a control, we can just exit the function

            } else if (include?.calls) {
                baselineDraft.imports[profileIndex].include!.calls!.push({ control_id, with_child_controls });
            } else {
                baselineDraft.imports[profileIndex].include = { calls: [{ control_id, with_child_controls }] };
            }
        } else {
            // Profile doesn't exist yet.
            // this shouldn't really happen.
            // if it does lets create a new profile.
            baselineDraft.imports.push({ href: import_profile, exclude: {}, include: { calls: [{ control_id, with_child_controls }] } })
        }
    }
}
export default includeControl;