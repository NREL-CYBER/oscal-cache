import { Catalog, CatalogUniversallyUniqueIdentifier, RoleIdentifier, Role, InformationTypeUniversallyUniqueIdentifier, InformationType, ControlIdentifier, Control, ControlGroup } from "oscal";
import { ProfileUniversallyUniqueIdentifier, Profile, GroupIdentifier } from "oscal/dist/profile";
interface OscalDirectoryLayout {
    catalog: Record<CatalogUniversallyUniqueIdentifier, Catalog>;
    role: Record<RoleIdentifier, Role>;
    information_type: Record<InformationTypeUniversallyUniqueIdentifier, InformationType>;
    baseline_profile: Record<ProfileUniversallyUniqueIdentifier, Profile>;
    control: Record<ControlIdentifier, Control>;
    control_group: Record<GroupIdentifier, ControlGroup>;
}
declare const load_oscal: () => OscalDirectoryLayout;
export default load_oscal;
