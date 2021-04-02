import { RoleIdentifier } from "oscal/dist/shared";
import { hasPublicationMetadata } from "../commands/insertResponsibleParty";
declare const responsiblePartiesForRole: <T extends hasPublicationMetadata>(origin: T, role_id: RoleIdentifier) => string[];
export default responsiblePartiesForRole;
