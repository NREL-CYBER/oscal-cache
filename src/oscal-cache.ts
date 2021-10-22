import {
    Activity,
    AssessmentPlatform, Catalog,
    ComponentDefinition, ComponentTypeInfo, Control,
    ControlBasedRequirement, ControlGroup,
    IdentifiedRisk, InformationType, InventoryItem,
    LeveragedAuthorization, Observation,
    OrganizationMissionStatement, Party,
    PlanOfActionAndMilestones,
    Profile, Resource, Role,
    SecurityAssessmentPlan,
    SecurityAssessmentResults, SelectAssessmentSubject, SubjectOfAssessment, SystemComponent,
    SystemComponentTypes,
    SystemSecurityPlan,
    Task
} from "oscal"
import schema from "oscal/src/schemas/oscal_complete_schema.json"
import { composeStore, composeVirtualStore, Store, VirtualStore } from "store"
import { v4 } from "uuid"
import { UseStore } from "zustand"
import { flattenControlTree } from "./queries"

const oscal_version = "1.0.0";

export type OscalCacheLayout = Record<OscalCachedDefinition, UseStore<Store<unknown>>>
export type OscalCache = {
    assessment_platform: UseStore<Store<AssessmentPlatform>>
    ssp: UseStore<Store<SystemSecurityPlan>>
    component_type_info: UseStore<Store<ComponentTypeInfo>>
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
    observation: UseStore<Store<Observation>>
}


export type OscalCachedDefinition =
    "system_security_plan" |
    "component_type_info" |
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
    component_type_info: composeStore<ComponentTypeInfo>({
        schema, definition: "component_type_info"
        , initial: SystemComponentTypes.map((title) => ({
            title, uuid: v4()
        })).reduce((a, b) =>
            ({ ...a, [b.uuid]: { title: b.title, uuid: b.uuid } }),
            {})
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
                title: "System Security Plan",
                last_modified: new Date().toISOString(),
                version: "0.0.0",
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
        schema, definition: "organization_mission_statement",
    }),
    poam: composeStore<PlanOfActionAndMilestones>({
        schema, definition: "plan_of_action_and_milestones",
        workspace:
        {
            uuid: v4(),
            metadata: {
                title: "Plan of Action & Milestones",
                last_modified: new Date().toISOString(),
                version: "0.0.0",
                oscal_version
            }, poam_items: []
        }
    }),
    sar: composeStore<SecurityAssessmentResults>({
        schema, definition: "assessment_results",
        workspace:
        {
            uuid: v4(),
            metadata: {
                title: "Assessment Results",
                last_modified: new Date().toISOString(),
                version: "0.0.0",
                oscal_version
            }, import_ap:
                { href: "" },
            results: []
        }
    }),
    sap: composeStore<SecurityAssessmentPlan>({
        schema, definition: "assessment_plan",
        workspace: {
            uuid: v4(),
            metadata:
            {
                title: "Assessment Plan",
                last_modified: new Date().toISOString(),
                version: "0.0.0",
                oscal_version
            }, import_ssp:
            {
                href: ""
            },
            reviewed_controls: {
                control_selections: []
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
            uuid: v4(),
            metadata:
            {
                title: "Component Definition",
                last_modified: new Date().toISOString(),
                version: "0.0.0",
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
};

export const useSSPInventoryitems = composeVirtualStore<InventoryItem>({
    fetch: () => {
        const ssp = oscal.ssp.getState().workspace
        const inventory = ssp && ssp.system_implementation.inventory_items ? ssp.system_implementation.inventory_items : []
        return inventory
    }, index: "uuid", synchronize: (inventoryRecords) => {
        return oscal.ssp.getState().updateWorkspace((ssp) => {
            ssp.system_implementation.inventory_items = [...inventoryRecords]
        })
    }
})
export const useActiveControls = composeVirtualStore<Control>({
    fetch: () => {
        const catalog = oscal.catalog.getState().activeInstance();
        const groups = catalog && typeof catalog.groups !== "undefined" ? catalog.groups : []
        const controls: Control[] = groups.flatMap(x => x.controls ? [...x.controls] : []);
        return flattenControlTree(controls);
    }, index: "id",
    synchronize: () => {
        return new Promise((resolve, reject) => {
            reject("This store is read only")
        })
    }
})
export const useActiveControlGroups = composeVirtualStore<ControlGroup>({
    fetch: () => {
        const catalog = oscal.catalog.getState().activeInstance();
        const groups = catalog && typeof catalog.groups !== "undefined" ? catalog.groups : []
        return groups
    }, index: "uuid",
    synchronize: () => {
        return new Promise((resolve, reject) => {
            reject("This store is read only")
        })
    }
})
export const useImplementations = composeVirtualStore<ControlBasedRequirement>({
    fetch: () => {
        const ssp = oscal.ssp.getState().workspace
        const implementations = ssp && ssp.control_implementation ?
            ssp.control_implementation.implemented_requirements : []
        return implementations
    }, index: "control_id"
    , synchronize: (implementations) => {
        return oscal.ssp.getState().updateWorkspace((ssp) => {
            ssp.control_implementation.implemented_requirements = [...implementations]
        })
    }
})

export const useActivities = composeVirtualStore<Activity>({
    fetch: () => {
        const activities = oscal.sar.getState().workspace?.local_definitions?.activities
        return activities ? activities : []
    }, index: "uuid"
    , synchronize: (activities) => {
        return oscal.sar.getState().updateWorkspace((sar) => {
            if (sar.local_definitions) {
                sar.local_definitions.activities = [...activities];
            } else {
                sar.local_definitions = { activities }
            }
        })
    }
})
export const useTasks = composeVirtualStore<Task>({
    fetch: () => {
        const tasks = oscal.sap.getState().workspace?.tasks
        return tasks ? tasks : []
    }, index: "uuid"
    , synchronize: (tasks) => {
        return oscal.sap.getState().updateWorkspace((sap) => {
            sap.tasks = [...tasks];
        })
    }
})




export default oscal;

