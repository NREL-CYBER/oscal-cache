import { ControlBasedRequirement } from "oscal"

export const isPartialyImplementation = (implementation: ControlBasedRequirement) => {
    return Object.keys(implementation.statements || {}).length > 0
}
export const implementationStatements = (implementation: ControlBasedRequirement) => {
    return Object.keys(implementation.statements || {}).length
}
