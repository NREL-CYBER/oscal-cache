import { Catalog, Component, InformationType, InventoryItem, OrganizationSecurityPolicy, Party, PlanOfActionAndMilestones, Profile, Role, SecurityAssessmentPlan, SecurityAssessmentResults, SystemSecurityPlan, Resource, SystemCharacteristics, AuthorizationBoundary, DataFlow, NetworkArchitecture } from "oscal";
import { Store } from "store";
import { UseStore } from "zustand";
import { IdentifiedRisk } from "oscal/dist/shared/IdentifiedRisk";
import Validator from "validator";
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
    authorization_boundary: () => {
        validator: () => Validator<AuthorizationBoundary>;
    };
    system_characteristics: () => {
        validator: () => Validator<SystemCharacteristics>;
    };
    inventory_item: () => {
        validator: () => Validator<InventoryItem>;
    };
    data_flow: () => {
        validator: () => Validator<DataFlow>;
    };
    network_architecture: () => {
        validator: () => Validator<NetworkArchitecture>;
    };
};
/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
declare const oscal: OscalCache;
export default oscal;
