import { Catalog, Component, InformationType, InventoryItem, OrganizationSecurityPolicy, Party, PlanOfActionAndMilestones, Profile, Role, SecurityAssessmentPlan, SecurityAssessmentResults, SystemSecurityPlan, Resource } from "oscal";
import { Store } from "store";
import { UseStore } from "zustand";
import { IdentifiedRisk } from "oscal/dist/shared/IdentifiedRisk";
export declare type OscalCache = {
    ssp: UseStore<Store<SystemSecurityPlan>>;
    information_type: UseStore<Store<InformationType>>;
    osp: UseStore<Store<OrganizationSecurityPolicy>>;
    poam: UseStore<Store<PlanOfActionAndMilestones>>;
    sar: UseStore<Store<SecurityAssessmentResults>>;
    sap: UseStore<Store<SecurityAssessmentPlan>>;
    baseline_profile: UseStore<Store<Profile>>;
    catalog: UseStore<Store<Catalog>>;
    party: UseStore<Store<Party>>;
    role: UseStore<Store<Role>>;
    inventory: UseStore<Store<InventoryItem>>;
    component: UseStore<Store<Component>>;
    risk: UseStore<Store<IdentifiedRisk>>;
    resource: UseStore<Store<Resource>>;
};
/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
declare const oscal: OscalCache;
export default oscal;
