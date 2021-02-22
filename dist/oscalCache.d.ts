import { AuthorizationBoundary, Catalog, Component, DataFlow, InformationType, InventoryItem, NetworkArchitecture, OrganizationSecurityPolicy, Party, PlanOfActionAndMilestones, Profile, Resource, Role, SecurityAssessmentPlan, SecurityAssessmentResults, SystemCharacteristics, SystemSecurityPlan, Control } from "oscal";
import { IdentifiedRisk } from "oscal/dist/shared/IdentifiedRisk";
import { Store } from "store";
import { UseStore } from "zustand";
import { ControlGroup } from "oscal/dist/profile";
export declare type OscalCache = {
    /**
     * System Security Plan Store hook
     */
    ssp: UseStore<Store<SystemSecurityPlan>>;
    /**
     * Information Type store hook
     */
    information_type: UseStore<Store<InformationType>>;
    osp: UseStore<Store<OrganizationSecurityPolicy>>;
    poam: UseStore<Store<PlanOfActionAndMilestones>>;
    sar: UseStore<Store<SecurityAssessmentResults>>;
    sap: UseStore<Store<SecurityAssessmentPlan>>;
    baseline_profile: UseStore<Store<Profile>>;
    catalog: UseStore<Store<Catalog>>;
    /**
     * Party store hook
     */
    party: UseStore<Store<Party>>;
    /**
     * Role store hook
     */
    role: UseStore<Store<Role>>;
    inventory: UseStore<Store<InventoryItem>>;
    component: UseStore<Store<Component>>;
    risk: UseStore<Store<IdentifiedRisk>>;
    resource: UseStore<Store<Resource>>;
    authorization_boundary: UseStore<Store<AuthorizationBoundary>>;
    system_characteristics: UseStore<Store<SystemCharacteristics>>;
    inventory_item: UseStore<Store<InventoryItem>>;
    data_flow: UseStore<Store<DataFlow>>;
    network_architecture: UseStore<Store<NetworkArchitecture>>;
    control: UseStore<Store<Control>>;
    controlGroup: UseStore<Store<ControlGroup>>;
};
/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
declare const oscal: OscalCache;
export default oscal;
