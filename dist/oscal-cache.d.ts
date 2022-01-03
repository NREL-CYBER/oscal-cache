import { Activity, AssessmentPlatform, Catalog, ComponentDefinition, Control, ControlBasedRequirement, ControlGroup, IdentifiedRisk, InformationType, InventoryItem, Observation, OrganizationMissionStatement, Party, PlanOfActionAndMilestones, Profile, Resource, Role, SecurityAssessmentPlan, SecurityAssessmentResults, SystemComponent, SystemSecurityPlan, Task } from "oscal";
import { Store } from "store";
import { UseBoundStore } from "zustand";
declare type OscalTypeEnum = {
    identifier: string;
    enum: String[];
    pattern?: string;
};
export declare type OscalCacheLayout = Record<OscalCachedDefinition, UseBoundStore<Store<unknown>>>;
export declare type OscalCache = {
    assessment_platform: UseBoundStore<Store<AssessmentPlatform>>;
    ssp: UseBoundStore<Store<SystemSecurityPlan>>;
    type_enum: UseBoundStore<Store<OscalTypeEnum>>;
    information_type: UseBoundStore<Store<InformationType>>;
    oms: UseBoundStore<Store<OrganizationMissionStatement>>;
    poam: UseBoundStore<Store<PlanOfActionAndMilestones>>;
    sar: UseBoundStore<Store<SecurityAssessmentResults>>;
    sap: UseBoundStore<Store<SecurityAssessmentPlan>>;
    profile: UseBoundStore<Store<Profile>>;
    catalog: UseBoundStore<Store<Catalog>>;
    party: UseBoundStore<Store<Party>>;
    role: UseBoundStore<Store<Role>>;
    component: UseBoundStore<Store<SystemComponent>>;
    component_definition: UseBoundStore<Store<ComponentDefinition>>;
    risk: UseBoundStore<Store<IdentifiedRisk>>;
    resource: UseBoundStore<Store<Resource>>;
    observation: UseBoundStore<Store<Observation>>;
};
export declare type OscalCachedDefinition = "system_security_plan" | "type_enum" | "ssp" | "poam" | "sap" | "sar" | "oms" | "plan_of_action_and_milestones" | "assessment_results" | "assessment_plan" | "profile" | "catalog" | "party" | "role" | "inventory_item" | "system_component" | "risk" | "resource" | "authorization_boundary" | "system_characteristics" | "authorization_boundary" | "control" | "group" | "implemented_requirement" | "assessment_platform" | "observation";
/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
declare const oscal: OscalCache;
export declare const useSSPInventoryitems: import("zustand").UseStore<import("store").VirtualStore<InventoryItem>, import("zustand").StoreApi<import("store").VirtualStore<InventoryItem>>>;
export declare const useActiveControls: import("zustand").UseStore<import("store").VirtualStore<Control>, import("zustand").StoreApi<import("store").VirtualStore<Control>>>;
export declare const useActiveControlGroups: import("zustand").UseStore<import("store").VirtualStore<ControlGroup>, import("zustand").StoreApi<import("store").VirtualStore<ControlGroup>>>;
export declare const useImplementations: import("zustand").UseStore<import("store").VirtualStore<ControlBasedRequirement>, import("zustand").StoreApi<import("store").VirtualStore<ControlBasedRequirement>>>;
export declare const useActivities: import("zustand").UseStore<import("store").VirtualStore<Activity>, import("zustand").StoreApi<import("store").VirtualStore<Activity>>>;
export declare const useTasks: import("zustand").UseStore<import("store").VirtualStore<Task>, import("zustand").StoreApi<import("store").VirtualStore<Task>>>;
export default oscal;
