import { importOscal, Catalog, CatalogUniversallyUniqueIdentifier, RoleIdentifier, Role, InformationTypeUniversallyUniqueIdentifier, InformationType, ControlIdentifier, Control, ControlGroup } from "oscal";
import NIST_HIGH from "oscal/content/baseline-profile/NIST_SP-800-53_rev5_HIGH-baseline_profile.json";
import NIST_LOW from "oscal/content/baseline-profile/NIST_SP-800-53_rev5_LOW-baseline_profile.json";
import NIST_MODERATE from "oscal/content/baseline-profile/NIST_SP-800-53_rev5_MODERATE-baseline_profile.json";
import NIST_PRIVACY from "oscal/content/baseline-profile/NIST_SP-800-53_rev5_PRIVACY-baseline_profile.json";
import NIST_800_53_CATALOG_REV5 from "oscal/content/catalog/NIST_SP-800-53_rev5_catalog.json";
import DEFAULT_INFO_TYPES from "oscal/content/information-type/fedramp-info-types.json";
import DEFAULT_ROLES from "oscal/content/role/default-roles.json";
import { v4 } from 'uuid';
import { ProfileUniversallyUniqueIdentifier, Profile, GroupIdentifier } from "oscal/dist/profile";
import { flattenControlTree } from "../../queries/catalog/flattenControlTree";


interface OscalDirectoryLayout {
    catalog: Record<CatalogUniversallyUniqueIdentifier, Catalog>
    role: Record<RoleIdentifier, Role>
    information_type: Record<InformationTypeUniversallyUniqueIdentifier, InformationType>
    baseline_profile: Record<ProfileUniversallyUniqueIdentifier, Profile>
    control: Record<ControlIdentifier, Control>
    control_group: Record<GroupIdentifier, ControlGroup>
}



export const load_oscal: () => OscalDirectoryLayout = () => {
    const nist_catalog = importOscal((NIST_800_53_CATALOG_REV5 as any)["catalog"]) as Catalog;
    const catalog = { [nist_catalog.uuid]: nist_catalog }
    const role = DEFAULT_ROLES.filter(x => !x.id.includes("isa")).reduce((roles, role) => {
        return { ...roles, [role.id]: importOscal(role) }
    }, {})


    const information_type = DEFAULT_INFO_TYPES["information-types"].reduce((info_types, oscal_1_info_type) => {
        //        delete oscal_1_info_type["information-type-ids"];
        const uuid = v4();
        let info_type_old: any = { ...importOscal(oscal_1_info_type), uuid };
        const information_type_ids = Object.values(oscal_1_info_type["information-type-ids"]).map(({ id }) => id);
        const system = Object.keys(oscal_1_info_type["information-type-ids"]).join()
        let info_type_new = {
            ...info_type_old, props: info_type_old["properties"].map((prop: any) => ({ ...prop, "ns": "https://nrel.oscal.gov/" })), categorizations: [
                {
                    system, information_type_ids
                }
            ]
        };
        delete info_type_new["information_type_ids"];
        delete info_type_new["properties"];
        return { ...info_types, [uuid]: info_type_new }
    }, {})
    const baseline_profile = [NIST_HIGH, NIST_MODERATE, NIST_LOW, NIST_PRIVACY]
        .map(baseline => baseline["profile"])
        .reduce((profiles, profile) => {
            const importedProfile = importOscal(profile);
            return { ...profiles, [importedProfile.uuid]: importedProfile };
        }, {});


    const control = flattenControlTree(nist_catalog.groups as Control[])
        .map(c => ({ [c.id]: c }))
        .reduce((a, b) => { return { ...a, ...b } });
    ;

    const control_group: Record<GroupIdentifier, ControlGroup> = nist_catalog.groups!
        .map(group => ({ [group.id!]: { ...group } }))
        .reduce((a = {}, b = {}) => { return { ...a, ...b } });




    return { catalog, baseline_profile, information_type, role, control, control_group };
}
