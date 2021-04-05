import { ControlBasedRequirement, Control } from "oscal";
export declare const implementationHasStatements: (implementation: ControlBasedRequirement) => boolean;
export declare const implementationStatementsCount: (implementation: ControlBasedRequirement) => number;
export declare const implementationValid: (implementation: ControlBasedRequirement, control: Control) => boolean;
