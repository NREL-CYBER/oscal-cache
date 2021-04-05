import { Part } from "oscal"

export const flattenPartLeaves: (p: Part) => Part[] = (part: Part) => {
    return typeof part.parts !== "undefined" ? part.parts.flatMap((p) => flattenPartLeaves(p)) : [part]
}

