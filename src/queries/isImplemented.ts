import { ControlBasedRequirement, Control } from "oscal"
import { flattenPartLeaves } from "./flattenPartTree"

export const implementationHasStatements = (implementation: ControlBasedRequirement) => {
    return Object.keys(implementation.statements || {}).length > 0
}

export const implementationStatementsCount = (implementation: ControlBasedRequirement) => {
    return Object.keys(implementation.statements || {}).length
}

export const isImplementationValid = (implementation: ControlBasedRequirement, control: Control) => {
    if (typeof implementation === "undefined" || typeof control === "undefined" || typeof control.parts === "undefined") {
        return false;
    }

    const statementParts = control.parts.filter(x => x.name === "statement");
    const required_parts = statementParts.flatMap(flattenPartLeaves).map(x => x.id);
    const implementation_statement_count = implementationStatementsCount(implementation);
    return required_parts.length === implementation_statement_count
}