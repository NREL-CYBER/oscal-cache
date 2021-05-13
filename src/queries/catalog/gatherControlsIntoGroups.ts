import { Control, ControlGroup } from "oscal";

/**
 * Calculate the amount of objectives in a control
 * @param groups 
 * @param control 
 */
export const gatherControlsIntoGroups = (groups: ControlGroup[], controls: Control[]) => {
    const control_ids = controls.map(x => x.id);
    const matching_groups = groups.map(group => {
        const matching_controls = group.controls!.filter(control => control_ids.includes(control.id)) || [];
        const controls = matching_controls.sort((x, y) =>
            Number(x.id.replace(group.id! + "-", "")) - Number(y.id.replace(group.id! + "-", ""))
        );
        return { ...group, controls } as ControlGroup;
    });
    return matching_groups.filter(group => group.controls && group.controls.length !== 0);
}
