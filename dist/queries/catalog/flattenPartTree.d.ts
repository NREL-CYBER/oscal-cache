import { Part } from "oscal";
/**
 * Flatten all sub parts for easy iteration
 * @param root Root Part
 */
export declare const flattenPartLeaves: (root: Part) => Part[];
