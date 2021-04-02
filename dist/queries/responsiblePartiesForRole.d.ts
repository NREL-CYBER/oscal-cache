import { RoleIdentifier } from "oscal/dist/shared";
import { hasPublicationMetadata } from "../commands/insertResponsibleParty";
export declare const responsiblePartiesForRole: <T extends hasPublicationMetadata>(origin: T, role_id: RoleIdentifier) => string[];
