import { Control } from "oscal";

/**
 * Flatten Control Tree
 * @param controls Controls to flatten
 */
export const flattenControlTree: (controls: Control[]) => Control[] = (controls: Control[]) => {
    return controls.flatMap(control => control.controls ? [control, ...flattenControlTree(control.controls)] : control);
}
