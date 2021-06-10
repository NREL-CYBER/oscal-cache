import { SystemSecurityPlan, Profile } from "oscal"

export const combineBaslineAndSSPParameters = (baseline: Partial<Profile> = {}, ssp: Partial<SystemSecurityPlan> = {}) => {
    return [
        ...baseline?.modify?.set_parameters?.map(({ values, param_id }) => ({ param_id, values: values || [] })) || [],
        ...ssp?.control_implementation?.set_parameters || []]
}
