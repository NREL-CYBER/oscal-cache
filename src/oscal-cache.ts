import {
    AssessmentPlatform, Catalog,
    ComponentDefinition, Control,
    ControlBasedRequirement, ControlGroup,
    IdentifiedRisk, InformationType, InventoryItem,
    LeveragedAuthorization, Observation,
    OrganizationMissionStatement, Party,
    PlanOfActionAndMilestones,
    Profile, Resource, Role,
    SecurityAssessmentPlan,
    SecurityAssessmentResults, SystemComponent,
    SystemSecurityPlan
} from "oscal"
import schema from "oscal/src/schemas/oscal_complete_schema.json"
import { composeStore, Store } from "store"
import { v4 } from "uuid"
import { UseStore } from "zustand"

const oscal_version = "1.0.0";

export type OscalCacheLayout = Record<OscalCachedDefinition, UseStore<Store<unknown>>>
export type OscalCache = {
    leveraged_authentication: UseStore<Store<LeveragedAuthorization>>
    assessment_platform: UseStore<Store<AssessmentPlatform>>
    ssp: UseStore<Store<SystemSecurityPlan>>
    information_type: UseStore<Store<InformationType>>
    oms: UseStore<Store<OrganizationMissionStatement>>
    poam: UseStore<Store<PlanOfActionAndMilestones>>
    sar: UseStore<Store<SecurityAssessmentResults>>
    sap: UseStore<Store<SecurityAssessmentPlan>>
    profile: UseStore<Store<Profile>>
    catalog: UseStore<Store<Catalog>>
    party: UseStore<Store<Party>>
    role: UseStore<Store<Role>>
    component: UseStore<Store<SystemComponent>>
    component_definition: UseStore<Store<ComponentDefinition>>
    risk: UseStore<Store<IdentifiedRisk>>
    resource: UseStore<Store<Resource>>
    inventory_item: UseStore<Store<InventoryItem>>
    control: UseStore<Store<Control>>
    group: UseStore<Store<ControlGroup>>
    implemented_requirement: UseStore<Store<ControlBasedRequirement>>
    observation: UseStore<Store<Observation>>
}

export type OscalCachedDefinition =
    "leveraged_authentication" |
    "system_security_plan" |
    "ssp" |
    "poam" |
    "sap" |
    "sar" |
    "oms" |
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
    "control" |
    "group" |
    "implemented_requirement" |
    "assessment_platform" |
    "observation"

/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
const oscal: OscalCache = {
    leveraged_authentication: composeStore<LeveragedAuthorization>({
        schema, definition: "leveraged_authentication"
    }),
    observation: composeStore<Observation>({
        schema, definition: "observation"
    }),
    assessment_platform: composeStore<AssessmentPlatform>({
        schema, definition: "assessment_platform"

    }),
    ssp: composeStore<SystemSecurityPlan>({
        schema, definition: "system_security_plan",
        workspace:
        {
            "uuid": v4(),
            "metadata": {
                "title": "",
                "last_modified": "",
                "version": "",
                oscal_version
            },
            "import_profile": {
                "href": ""
            },
            "system_characteristics": {
                "system_ids": [],
                "system_name": "",
                "description": "",
                "security_sensitivity_level": "",
                "system_information": {
                    "information_types": []
                },
                "security_impact_level": {
                    "security_objective_confidentiality": "",
                    "security_objective_integrity": "",
                    "security_objective_availability": ""
                },
                "status": {
                    "state": ""
                },
                "authorization_boundary": {
                    "description": ""
                }
            },
            "system_implementation": {
                "users": [],
                "components": []
            },
            "control_implementation": {
                "description": "",
                "implemented_requirements": []
            },
            "back_matter": {
                "resources": [
                ]
            }
        }
    }),
    information_type: composeStore<InformationType>({
        schema, definition: "information_type"
    }),
    oms: composeStore<OrganizationMissionStatement>({
        schema, definition: "organizationMissionStatement",
    }),
    poam: composeStore<PlanOfActionAndMilestones>({
        schema, definition: "plan_of_action_and_milestones",
        workspace:
        {
            "uuid": v4(),
            "metadata": {
                "title": "",
                "last_modified": "",
                "version": "",
                oscal_version
            }, "poam_items": []
        }
    }),
    sar: composeStore<SecurityAssessmentResults>({
        schema, definition: "assessment_results",
        workspace:
        {
            "uuid": v4(),
            "metadata": {
                "title": "",
                "last_modified": "",
                "version": "",
                oscal_version
            }, "import_ap": { "href": "" }, "results": []
        }
    }),
    sap: composeStore<SecurityAssessmentPlan>({
        schema, definition: "assessment_plan",
        workspace: {
            "uuid": v4(),
            "metadata":
            {
                "title": "",
                "last_modified": "",
                "version": "",
                oscal_version
            }, "import_ssp":
            {
                "href": ""
            },
            "reviewed_controls": {
                "control_selections": []
            }
        }
    }),
    profile: composeStore<Profile>({
        schema, definition: "profile",
    }),
    catalog: composeStore<Catalog>({
        schema, definition: "catalog"
    }),
    party: composeStore<Party>({
        schema, definition: "party"
    }),
    role: composeStore<Role>({
        schema, definition: "role"
    }),
    component: composeStore<SystemComponent>({
        schema, definition: "system_component"
    }),
    component_definition: composeStore<ComponentDefinition>({
        schema, definition: "component_definition",
        workspace: {
            "uuid": v4(),
            "metadata":
            {
                "title": "",
                "last_modified": "",
                "version": "",
                oscal_version
            },
        }

    }),
    risk: composeStore<IdentifiedRisk>({
        schema, definition: "risk"
    }),
    resource: composeStore<Resource>({
        schema, definition: "resource",
    }),
    inventory_item: composeStore<InventoryItem>({
        schema, definition: "inventory_item"
    }),
    control: composeStore<Control>({
        schema, definition: "control"
    }),
    group: composeStore<ControlGroup>({
        schema, definition: "group"
    }),
    implemented_requirement: composeStore<ControlBasedRequirement>({
        schema, definition: "implemented_requirement"
    }),
};

export default oscal;

