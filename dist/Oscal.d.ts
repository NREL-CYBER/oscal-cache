import { Catalog, Party, PlanOfActionAndMilestones, Profile, Resource, Role, SecurityAssessmentPlan, SecurityAssessmentResults, SystemSecurityPlan } from "oscal";
/**
 *  Global cache for oscal data storage for use in react with hooks
 */
declare const Oscal: {
    ssp: import("zustand").UseStore<import("store").Store<SystemSecurityPlan>>;
    poam: import("zustand").UseStore<import("store").Store<PlanOfActionAndMilestones>>;
    sar: import("zustand").UseStore<import("store").Store<SecurityAssessmentResults>>;
    sap: import("zustand").UseStore<import("store").Store<SecurityAssessmentPlan>>;
    profile: import("zustand").UseStore<import("store").Store<Profile>>;
    catalog: import("zustand").UseStore<import("store").Store<Catalog>>;
    party: import("zustand").UseStore<import("store").Store<Party>>;
    role: import("zustand").UseStore<import("store").Store<Role>>;
    resources: import("zustand").UseStore<import("store").Store<Resource>>;
};
export default Oscal;
