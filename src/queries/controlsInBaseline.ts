import { Profile } from "oscal";
import { CatalogOrProfileReference } from "oscal/dist/profile";

/**
 * Get Control ID's of all included or altered in baseline
 * @param baseline
 */
export const profileModifications = (import_href: CatalogOrProfileReference, baseline: Profile) => {
    const modifications = (baseline.modify?.alters?.map(x => x ? x.control_id : ""));
    return modifications || [];
}
export const profileAlterations = (baseline: Profile) => {
    const alterations = (baseline && baseline.modify && baseline.modify.alters && baseline.modify.alters);
    return alterations;
}
export const profileInclusions = (import_href: CatalogOrProfileReference, baseline: Profile) => {
    const profile_import = baseline.imports.find(x => x.href === import_href);
    const inclusions = profile_import?.include?.calls?.map(x => x ? x.control_id : "");
    return inclusions || [];
}
export const profileExclusions = (import_href: CatalogOrProfileReference, baseline: Profile) => {
    const profile_import = baseline.imports.find(x => x.href === import_href);
    const exclusions = profile_import?.exclude?.calls?.map(x => x ? x.control_id : "");
    return exclusions || [];
}

