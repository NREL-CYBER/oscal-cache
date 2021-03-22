import { AuthorizationBoundary, Catalog, Component, ComponentControlImplementation, Control, ControlBasedRequirement, ControlGroup, DataFlow, InformationType, InventoryItem, NetworkArchitecture, OrganizationSecurityPolicy, Party, PlanOfActionAndMilestones, Profile, Resource, Role, SecurityAssessmentPlan, SecurityAssessmentResults, SystemCharacteristics, SystemSecurityPlan } from "oscal";
import { IdentifiedRisk } from "oscal/dist/shared/IdentifiedRisk";
import { Store } from "store";
import { UseStore } from "zustand";
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
    party: UseStore<Store<Party>>;
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
    control_group: UseStore<Store<ControlGroup>>;
    implemented_requirement: UseStore<Store<ControlBasedRequirement>>;
    by_component: UseStore<Store<ComponentControlImplementation>>;
};
export declare type OscalCachedDefinition = "oscal_ssp_system_security_plan" | "organization_security_policy" | "oscal_poam_plan_of_action_and_milestones" | "oscal_ar_assessment_results" | "oscal_ap_assessment_plan" | "oscal_profile_profile" | "oscal_catalog_catalog" | "oscal_ssp_party" | "oscal_ssp_role" | "oscal_ssp_inventory_item" | "oscal_ssp_system_component" | "oscal_poam_risk" | "oscal_ssp_resource" | "oscal_ssp_authorization_boundary" | "oscal_ssp_system_characteristics" | "oscal_ssp_authorization_boundary" | "oscal_ssp_data_flow" | "oscal_catalog_control" | "oscal_catalog_control_group" | "oscal_ssp_implemented_requirement" | "oscal_ssp_by_component";
/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
declare const oscal: OscalCache;
export default oscal;
