import { Part } from "oscal"

/**
 * Flatten all sub parts for easy iteration
 * @param root Root Part
 */
export const flattenPartLeaves: (root: Part) => Part[] = (part: Part) => {
    return typeof part.parts !== "undefined" ? part.parts.flatMap((p) => flattenPartLeaves(p)) : [part]
}

