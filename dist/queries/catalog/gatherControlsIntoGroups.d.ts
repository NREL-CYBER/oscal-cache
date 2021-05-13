import { Control, ControlGroup } from "oscal";
/**
 * Calculate the amount of objectives in a control
 * @param groups
 * @param control
 */
export declare const gatherControlsIntoGroups: (groups: ControlGroup[], controls: Control[]) => ControlGroup[];
