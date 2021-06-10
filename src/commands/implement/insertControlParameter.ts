import { SetParameterValue } from "oscal";
export const insertControlParameter = (set_params: SetParameterValue[] = [], set_value: SetParameterValue) => {
    const other_parameters = set_params.filter(x => x.param_id !== set_value.param_id);
    return [...other_parameters, set_value]
}