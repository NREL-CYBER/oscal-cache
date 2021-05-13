import { Profile } from "oscal";

export const setBaselineParameter = (param_id: string, values: string[]) => (baseline: Profile) => {
    const modify = baseline.modify || {};
    const set_parameters = modify.set_parameters || {}
    let parameter_setting = set_parameters[param_id] || {}
    parameter_setting.values = values.join("").length === 0 ? undefined : values;
    baseline.modify = { ...modify, set_parameters: { ...set_parameters, [param_id]: parameter_setting } }
}
