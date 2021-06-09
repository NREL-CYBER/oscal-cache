import { Profile } from "oscal";

export const setBaselineParameter = (param_id: string, values: string[]) => (baseline: Profile) => {
    const modify = baseline.modify || { set_parameters: [] };
    const set_parameters = modify.set_parameters
    let parameter_setting = { ...set_parameters?.find(x => x.param_id === param_id), param_id, values };
    const other_parameters = set_parameters?.filter(x => x.param_id !== param_id) || [];
    baseline.modify = { ...modify, set_parameters: [...other_parameters, parameter_setting] }
}
