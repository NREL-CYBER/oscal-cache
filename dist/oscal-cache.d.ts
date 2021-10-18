import { AssessmentPlatform, Catalog, ComponentDefinition, ComponentTypeInfo, Control, ControlBasedRequirement, ControlGroup, IdentifiedRisk, InformationType, InventoryItem, LeveragedAuthorization, Observation, OrganizationMissionStatement, Party, PlanOfActionAndMilestones, Profile, Resource, Role, SecurityAssessmentPlan, SecurityAssessmentResults, SystemComponent, SystemSecurityPlan } from "oscal";
import { Store } from "store";
import { UseStore } from "zustand";
export declare type OscalCacheLayout = Record<OscalCachedDefinition, UseStore<Store<unknown>>>;
export declare type OscalCache = {
    leveraged_authentication: UseStore<Store<LeveragedAuthorization>>;
    assessment_platform: UseStore<Store<AssessmentPlatform>>;
    ssp: UseStore<Store<SystemSecurityPlan>>;
    component_type_info: UseStore<Store<ComponentTypeInfo>>;
    information_type: UseStore<Store<InformationType>>;
    oms: UseStore<Store<OrganizationMissionStatement>>;
    poam: UseStore<Store<PlanOfActionAndMilestones>>;
    sar: UseStore<Store<SecurityAssessmentResults>>;
    sap: UseStore<Store<SecurityAssessmentPlan>>;
    profile: UseStore<Store<Profile>>;
    catalog: UseStore<Store<Catalog>>;
    party: UseStore<Store<Party>>;
    role: UseStore<Store<Role>>;
    component: UseStore<Store<SystemComponent>>;
    component_definition: UseStore<Store<ComponentDefinition>>;
    risk: UseStore<Store<IdentifiedRisk>>;
    resource: UseStore<Store<Resource>>;
    inventory_item: UseStore<Store<InventoryItem>>;
    control: UseStore<Store<Control>>;
    group: UseStore<Store<ControlGroup>>;
    implemented_requirement: UseStore<Store<ControlBasedRequirement>>;
    observation: UseStore<Store<Observation>>;
};
export declare type OscalCachedDefinition = "leveraged_authentication" | "system_security_plan" | "component_type_info" | "ssp" | "poam" | "sap" | "sar" | "oms" | "plan_of_action_and_milestones" | "assessment_results" | "assessment_plan" | "profile" | "catalog" | "party" | "role" | "inventory_item" | "system_component" | "risk" | "resource" | "authorization_boundary" | "system_characteristics" | "authorization_boundary" | "control" | "group" | "implemented_requirement" | "assessment_platform" | "observation";
/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
declare const oscal: OscalCache;
export default oscal;
