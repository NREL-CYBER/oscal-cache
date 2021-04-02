import { Profile } from "oscal";
import { CatalogOrProfileReference } from "oscal/dist/profile";
/**
 * Get Control ID's of all included or altered in baseline
 * @param baseline
 */
export declare const profileModifications: (import_href: CatalogOrProfileReference, baseline: Profile) => (string | undefined)[];
export declare const profileAlterations: (baseline: Profile) => [import("oscal/dist/profile").Alteration, ...import("oscal/dist/profile").Alteration[]] | undefined;
export declare const profileInclusions: (import_href: CatalogOrProfileReference, baseline: Profile) => string[];
export declare const profileExclusions: (import_href: CatalogOrProfileReference, baseline: Profile) => string[];
