import { RoleIdentifier } from "oscal/dist/shared";
import { hasPublicationMetadata } from "../commands/insertResponsibleParty";
const responsiblePartiesForRole = <T extends hasPublicationMetadata>(origin: T, role_id: RoleIdentifier) =>
    typeof origin !== "undefined" && typeof (origin.metadata) !== "undefined" &&
        origin.metadata.responsible_parties &&
        origin.metadata.responsible_parties[role_id] ?
        origin.metadata.responsible_parties[role_id].party_uuids : [];

export default responsiblePartiesForRole;