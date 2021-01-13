import { SystemSecurityPlan, PlanOfActionAndMilestones, SecurityAssessmentResults, SecurityAssessmentPlan, Profile, Catalog, Party, Role, Resource } from "oscal";
/**
 *  Global cache for oscal data storage for use in vanilla typescript
 */
declare const VanillaOscal: {
    ssp: import("zustand").StoreApi<import("store").Store<SystemSecurityPlan>>;
    poam: import("zustand").StoreApi<import("store").Store<PlanOfActionAndMilestones>>;
    sar: import("zustand").StoreApi<import("store").Store<SecurityAssessmentResults>>;
    sap: import("zustand").StoreApi<import("store").Store<SecurityAssessmentPlan>>;
    profile: import("zustand").StoreApi<import("store").Store<Profile>>;
    catalog: import("zustand").StoreApi<import("store").Store<Catalog>>;
    party: import("zustand").StoreApi<import("store").Store<Party>>;
    role: import("zustand").StoreApi<import("store").Store<Role>>;
    resources: import("zustand").StoreApi<import("store").Store<Resource>>;
};
export default VanillaOscal;
