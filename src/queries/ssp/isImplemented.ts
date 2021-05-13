import { ControlBasedRequirement, Control } from "oscal"
import { flattenPartLeaves } from "../catalog/flattenPartTree"
import { propValue } from "../shared/propertyQueries"

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
    const getStatus = propValue("status");
    const statementParts = control.parts.filter(x => x.name === "statement");
    const required_parts = statementParts
        .flatMap((part) => part && flattenPartLeaves(part))
        .map(x => getStatus(x.props) !== "withdrawn" && typeof x.parts === "undefined" ? x.id : undefined)
        .filter(x => typeof x !== "undefined");
    const implementation_statement_count = implementationStatementsCount(implementation);
    return required_parts.length === implementation_statement_count
}