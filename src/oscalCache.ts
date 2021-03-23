import {
    AuthorizationBoundary, Catalog, Component,
    ComponentControlImplementation, Control, ControlBasedRequirement, ControlGroup, DataFlow, InformationType, InventoryItem,
    NetworkArchitecture, OrganizationSecurityPolicy, Party, PlanOfActionAndMilestones,
    Profile, Resource, Role, SecurityAssessmentPlan, SecurityAssessmentResults,
    SystemCharacteristics, SystemSecurityPlan
} from "oscal"
import { IdentifiedRisk } from "oscal/dist/shared/IdentifiedRisk"
import sap from "oscal/schemas/oscal_assessment-plan_schema.json"
import sar from "oscal/schemas/oscal_assessment-results_schema.json"
import catalog from "oscal/schemas/oscal_catalog_schema.json"
import osp from "oscal/schemas/oscal_organization_security_policy.json"
import poam from "oscal/schemas/oscal_poam_schema.json"
import profile from "oscal/schemas/oscal_profile_schema.json"
import ssp from "oscal/schemas/oscal_ssp_schema.json"
import { composeStore, Store } from "store"
import { UseStore } from "zustand"


export type OscalCache = {
    /**
     * System Security Plan Store hook
     */
    ssp: UseStore<Store<SystemSecurityPlan>>
    /**
     * Information Type store hook
     */
    information_type: UseStore<Store<InformationType>>
    osp: UseStore<Store<OrganizationSecurityPolicy>>
    poam: UseStore<Store<PlanOfActionAndMilestones>>
    sar: UseStore<Store<SecurityAssessmentResults>>
    sap: UseStore<Store<SecurityAssessmentPlan>>
    baseline_profile: UseStore<Store<Profile>>
    catalog: UseStore<Store<Catalog>>
    party: UseStore<Store<Party>>
    role: UseStore<Store<Role>>
    inventory: UseStore<Store<InventoryItem>>
    component: UseStore<Store<Component>>
    risk: UseStore<Store<IdentifiedRisk>>
    resource: UseStore<Store<Resource>>
    authorization_boundary: UseStore<Store<AuthorizationBoundary>>
    system_characteristics: UseStore<Store<SystemCharacteristics>>
    inventory_item: UseStore<Store<InventoryItem>>
    data_flow: UseStore<Store<DataFlow>>
    network_architecture: UseStore<Store<NetworkArchitecture>>
    control: UseStore<Store<Control>>
    control_group: UseStore<Store<ControlGroup>>
    implemented_requirement: UseStore<Store<ControlBasedRequirement>>
    by_component: UseStore<Store<ComponentControlImplementation>>
}

export type OscalCachedDefinition =
    "system_security_plan" |
    "organization_security_policy" |
    "plan_of_action_and_milestones" |
    "assessment_results" |
    "assessment_plan" |
    "profile" |
    "catalog" |
    "party" |
    "role" |
    "inventory_item" |
    "system_component" |
    "risk" |
    "resource" |
    "authorization_boundary" |
    "system_characteristics" |
    "authorization_boundary" |
    "data_flow" |
    "control" |
    "control_group" |
    "implemented_requirement" |
    "by_component"

/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
const oscal: OscalCache = {
    ssp: composeStore<SystemSecurityPlan>({
        schema: ssp, definition: "oscal_ssp_system_security_plan"
    }),
    information_type: composeStore<InformationType>({
        schema:
            { ...ssp.definitions.system_information.properties.information_types.items, definitions: ssp.definitions }
    }),
    osp: composeStore<OrganizationSecurityPolicy>({
        schema: osp, definition: "organization_security_policy"
    }),
    poam: composeStore<PlanOfActionAndMilestones>({
        schema: poam, definition: "plan_of_action_and_milestones"
    }),
    sar: composeStore<SecurityAssessmentResults>({
        schema: sar, definition: "assessment_results"
    }),
    sap: composeStore<SecurityAssessmentPlan>({
        schema: sap, definition: "assessment_plan"
    }),
    baseline_profile: composeStore<Profile>({
        schema: profile, definition: "profile"
    }),
    catalog: composeStore<Catalog>({
        schema: catalog, definition: "catalog"
    }),
    party: composeStore<Party>({
        schema: ssp, definition: "party"
    }),
    role: composeStore<Role>({
        schema: ssp, definition: "role"
    }),
    inventory: composeStore<InventoryItem>({
        schema: ssp, definition: "inventory_item"
    }),
    component: composeStore<Component>({
        schema: ssp, definition: "system_component"
    }),
    risk: composeStore<IdentifiedRisk>({
        schema: poam, definition: "poam_risk"
    }),
    resource: composeStore<Resource>({
        definition: "resource",
        schema: ssp,
    }),
    authorization_boundary: composeStore<AuthorizationBoundary>({
        schema: ssp, definition: "authorization_boundary"
    }),
    system_characteristics: composeStore<SystemCharacteristics>({
        schema: ssp, definition: "system_characteristics"
    }),
    inventory_item: composeStore<InventoryItem>({
        schema: ssp, definition: "inventory_item"
    }),
    data_flow: composeStore<DataFlow>({
        schema: ssp, definition: "data_flow"
    }),
    network_architecture: composeStore<NetworkArchitecture>({
        schema: ssp, definition: "network_architecture"
    }),
    control: composeStore<Control>({
        schema: catalog, definition: "control"
    }),
    control_group: composeStore<ControlGroup>({
        schema: catalog, definition: "control_group"
    }),
    implemented_requirement: composeStore<ControlBasedRequirement>({
        schema: ssp, definition: "implemented_requirement"
    }),
    by_component: composeStore<ComponentControlImplementation>({
        schema: ssp, definition: "by_component"
    })
};

export default oscal;

