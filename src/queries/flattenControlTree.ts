import { Control } from "oscal";

export const flattenControlTree: (controls: Control[]) => Control[] = (controls: Control[]) => {
    return controls.flatMap(control => control.controls ? flattenControlTree(control.controls) : control);
}
