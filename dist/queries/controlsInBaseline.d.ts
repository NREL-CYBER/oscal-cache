import { Profile } from "oscal";
/**
 * Get Control ID's of all included or altered in baseline
 * @param baseline
 */
export declare const profileModifications: (baseline: Profile) => (string | undefined)[];
export declare const profileAlterations: (baseline: Profile) => [import("oscal/dist/profile").Alteration, ...import("oscal/dist/profile").Alteration[]] | undefined;
export declare const profileInclusions: (baseline: Profile) => (string | undefined)[];
export declare const profileExclusions: (baseline: Profile) => (string | undefined)[];
