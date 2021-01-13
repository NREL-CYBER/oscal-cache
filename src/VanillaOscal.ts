import ssp_schema from "oscal/schemas/oscal_ssp_schema.json"
import poam_schema from "oscal/schemas/oscal_poam_schema.json"
import sap_schema from "oscal/schemas/oscal_assessment-plan_schema.json"
import sar_schema from "oscal/schemas/oscal_assessment-results_schema.json"
import profile_schema from "oscal/schemas/oscal_profile_schema.json"
import catalog_schema from "oscal/schemas/oscal_catalog_schema.json"
import composeStore from "store/dist/composeVanillaStore"
import { SystemSecurityPlan, PlanOfActionAndMilestones, SecurityAssessmentResults, SecurityAssessmentPlan, Profile, Catalog, Party, Role, Resource } from "oscal"

/**
 *  Global cache for oscal data storage for use in vanilla typescript
 */
const VanillaOscal = {
    ssp: composeStore<SystemSecurityPlan>(ssp_schema, "system_security_plan"),
    poam: composeStore<PlanOfActionAndMilestones>(poam_schema, "plan_of_action_and_milestones"),
    sar: composeStore<SecurityAssessmentResults>(sar_schema, "assessment_results"),
    sap: composeStore<SecurityAssessmentPlan>(sap_schema, "assessment_plan"),
    profile: composeStore<Profile>(profile_schema, "profile"),
    catalog: composeStore<Catalog>(catalog_schema, "catalog"),
    party: composeStore<Party>(catalog_schema, "party"),
    role: composeStore<Role>(catalog_schema, "role"),
    resources: composeStore<Resource>(profile_schema, "resource")
}




export default VanillaOscal;

