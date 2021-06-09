import { RoleIdentifier } from "oscal";
import { hasPublicationMetadata } from "../../commands/shared/insertResponsibleParty";
export declare const responsiblePartiesForRole: <T extends hasPublicationMetadata>(origin: T, role_id: RoleIdentifier) => false | string[] | undefined;
