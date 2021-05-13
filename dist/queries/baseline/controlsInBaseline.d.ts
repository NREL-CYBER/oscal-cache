import { Profile } from "oscal";
/**
 * Get Control ID's of all included or altered in baseline
 * @param baseline
 */
export declare const profileModifications: (baseline: Profile) => (string | undefined)[];
export declare const profileAlterations: (baseline: Profile) => import("oscal/dist/profile").Alteration[];
export declare const profileInclusions: (baseline: Profile) => string[];
export declare const profileExclusions: (baseline: Profile) => string[];
