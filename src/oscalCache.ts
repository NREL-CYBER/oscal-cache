import {
    Catalog, Component, InformationType, InventoryItem,
    OrganizationSecurityPolicy, Party, PlanOfActionAndMilestones,
    Profile, Role, SecurityAssessmentPlan,
    SecurityAssessmentResults, SystemSecurityPlan, Resource
} from "oscal"
import sap from "oscal/schemas/oscal_assessment-plan_schema.json"
import sar from "oscal/schemas/oscal_assessment-results_schema.json"
import catalog from "oscal/schemas/oscal_catalog_schema.json"
import osp from "oscal/schemas/oscal_organization_security_policy.json"
import poam from "oscal/schemas/oscal_poam_schema.json"
import profile from "oscal/schemas/oscal_profile_schema.json"
import ssp from "oscal/schemas/oscal_ssp_schema.json"
import { composeStore, Store } from "store"
import { UseStore } from "zustand"
import { IdentifiedRisk } from "oscal/dist/shared/IdentifiedRisk"


export type OscalCache = {
    ssp: UseStore<Store<SystemSecurityPlan>>
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
}

/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
const oscal: OscalCache = {
    ssp: composeStore<SystemSecurityPlan>({
        schema: ssp, definition: "system_security_plan"
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
        schema: poam, definition: "risk"
    }),
    resource: composeStore<Resource>(
        {
            definition: "resource",
            schema:
            {
                ...ssp.definitions.back_matter.properties.resources.items,
                definitions: ssp.definitions
            },
        }
    ),
};


export default oscal;

