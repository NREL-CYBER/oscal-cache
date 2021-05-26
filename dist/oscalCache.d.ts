import { Catalog, Component, Control, ControlBasedRequirement, ControlGroup, InformationType, InventoryItem, OrganizationSecurityPolicy, Party, PlanOfActionAndMilestones, Profile, Resource, Role, SecurityAssessmentPlan, SecurityAssessmentResults, SystemSecurityPlan, Capability, ComponentDefinition } from "oscal";
import { IdentifiedRisk } from "oscal";
import { Store } from "store";
import { UseStore } from "zustand";
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
    component: UseStore<Store<Component>>;
    component_definition: UseStore<Store<ComponentDefinition>>;
    capability: UseStore<Store<Capability>>;
    risk: UseStore<Store<IdentifiedRisk>>;
    resource: UseStore<Store<Resource>>;
    inventory_item: UseStore<Store<InventoryItem>>;
    control: UseStore<Store<Control>>;
    control_group: UseStore<Store<ControlGroup>>;
    implemented_requirement: UseStore<Store<ControlBasedRequirement>>;
};
export declare type OscalCachedDefinition = "system_security_plan" | "organization_security_policy" | "plan_of_action_and_milestones" | "assessment_results" | "assessment_plan" | "profile" | "catalog" | "party" | "role" | "inventory_item" | "system_component" | "risk" | "resource" | "authorization_boundary" | "system_characteristics" | "authorization_boundary" | "data_flow" | "control" | "control_group" | "implemented_requirement";
/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
declare const oscal: OscalCache;
export default oscal;
