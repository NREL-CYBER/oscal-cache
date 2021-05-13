import { Role } from "oscal";
import { hasPublicationMetadata } from "./insertResponsibleParty";
export declare const addRoleToMetadata: (role: Role) => (authPackage: hasPublicationMetadata) => void;
