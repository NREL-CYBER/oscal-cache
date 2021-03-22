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
    "oscal_ssp_system_security_plan" |
    "organization_security_policy" |
    "oscal_poam_plan_of_action_and_milestones" |
    "oscal_ar_assessment_results" |
    "oscal_ap_assessment_plan" |
    "oscal_profile_profile" |
    "oscal_catalog_catalog" |
    "oscal_ssp_party" |
    "oscal_ssp_role" |
    "oscal_ssp_inventory_item" |
    "oscal_ssp_system_component" |
    "oscal_poam_risk" |
    "oscal_ssp_resource" |
    "oscal_ssp_authorization_boundary" |
    "oscal_ssp_system_characteristics" |
    "oscal_ssp_authorization_boundary" |
    "oscal_ssp_data_flow" |
    "oscal_catalog_control" |
    "oscal_catalog_control_group" |
    "oscal_ssp_implemented_requirement" |
    "oscal_ssp_by_component"

/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
const oscal: OscalCache = {
    ssp: composeStore<SystemSecurityPlan>({
        schema: ssp, definition: "oscal_ssp_system_security_plan"
    }),
    information_type: composeStore<InformationType>({
        schema:
            { ...ssp.definitions.oscal_ssp_system_information.properties.information_types.items, definitions: ssp.definitions }
    }),
    osp: composeStore<OrganizationSecurityPolicy>({
        schema: osp, definition: "organization_security_policy"
    }),
    poam: composeStore<PlanOfActionAndMilestones>({
        schema: poam, definition: "oscal_poam_plan_of_action_and_milestones"
    }),
    sar: composeStore<SecurityAssessmentResults>({
        schema: sar, definition: "oscal_ar_assessment_results"
    }),
    sap: composeStore<SecurityAssessmentPlan>({
        schema: sap, definition: "oscal_ap_assessment_plan"
    }),
    baseline_profile: composeStore<Profile>({
        schema: profile, definition: "oscal_profile_profile"
    }),
    catalog: composeStore<Catalog>({
        schema: catalog, definition: "oscal_catalog_catalog"
    }),
    party: composeStore<Party>({
        schema: ssp, definition: "oscal_ssp_party"
    }),
    role: composeStore<Role>({
        schema: ssp, definition: "oscal_ssp_role"
    }),
    inventory: composeStore<InventoryItem>({
        schema: ssp, definition: "oscal_ssp_inventory_item"
    }),
    component: composeStore<Component>({
        schema: ssp, definition: "oscal_ssp_system_component"
    }),
    risk: composeStore<IdentifiedRisk>({
        schema: poam, definition: "oscal_poam_risk"
    }),
    resource: composeStore<Resource>({
        definition: "oscal_ssp_resource",
        schema: ssp,
    }),
    authorization_boundary: composeStore<AuthorizationBoundary>({
        schema: ssp, definition: "oscal_ssp_authorization_boundary"
    }),
    system_characteristics: composeStore<SystemCharacteristics>({
        schema: ssp, definition: "oscal_ssp_system_characteristics"
    }),
    inventory_item: composeStore<InventoryItem>({
        schema: ssp, definition: "oscal_ssp_inventory_item"
    }),
    data_flow: composeStore<DataFlow>({
        schema: ssp, definition: "oscal_ssp_data_flow"
    }),
    network_architecture: composeStore<NetworkArchitecture>({
        schema: ssp, definition: "oscal_ssp_network_architecture"
    }),
    control: composeStore<Control>({
        schema: catalog, definition: "oscal_catalog_control"
    }),
    control_group: composeStore<ControlGroup>({
        schema: catalog, definition: "oscal_catalog_control_group"
    }),
    implemented_requirement: composeStore<ControlBasedRequirement>({
        schema: ssp, definition: "oscal_ssp_implemented_requirement"
    }),
    by_component: composeStore<ComponentControlImplementation>({
        schema: ssp, definition: "oscal_ssp_by_component"
    })
};

export default oscal;

