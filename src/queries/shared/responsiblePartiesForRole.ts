import { RoleIdentifier } from "oscal";
import { hasPublicationMetadata } from "../../commands/shared/insertResponsibleParty";

export const responsiblePartiesForRole = <T extends hasPublicationMetadata>(origin: T, role_id: RoleIdentifier) =>
    typeof origin !== "undefined" && typeof (origin.metadata) !== "undefined" &&
    origin.metadata.responsible_parties &&
    origin.metadata.responsible_parties.find(x => x.role_id === role_id)?.party_uuids

