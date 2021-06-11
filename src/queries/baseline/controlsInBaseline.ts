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
    const calls = baseline.imports.flatMap(x => x.include_controls?.flatMap(x => x.with_ids || [])) as string[];
    return (calls || []) as string[];
}
export const profileExclusions = (baseline: Profile) => {
    const calls = baseline.imports.flatMap(x => x.exclude_controls?.flatMap(x => x.with_ids || [])) as string[];
    return (calls || []) as string[];
}

