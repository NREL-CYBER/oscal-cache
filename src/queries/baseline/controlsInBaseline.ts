import { Profile } from "oscal";

/**
 * Get Control ID's of all included or altered in baseline
 * @param baseline
 */
export const profileModifications = (baseline: Profile) => {
    const modifications = (baseline.modify?.alters?.map(x => x ? x.control_id : ""));
    return modifications || [];
}
export const profileAlterations = (baseline: Profile) => {
    const alterations = (baseline && baseline.modify && baseline.modify.alters && baseline.modify.alters);
    return alterations?.filter(Boolean) || [];
}
export const profileInclusions = (baseline: Profile) => {
    const inclusions = baseline.imports.flatMap(({ include_controls }) => include_controls?.map(x => x ? x.control_id : "")).filter(Boolean);
    return (inclusions || []) as string[];
}
export const profileExclusions = (baseline: Profile) => {
    const exclusions = baseline.imports.flatMap(({ exclude_controls }) => exclude_controls?.map(x => x ? x.control_id : "")).filter(Boolean);
    return (exclusions || []) as string[];
}

