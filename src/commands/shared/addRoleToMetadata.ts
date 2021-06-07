import { Role } from "oscal";
import { hasPublicationMetadata } from "./insertResponsibleParty";

export const addRoleToMetadata = (role: Role) => (authPackage: hasPublicationMetadata) => {
    const roles = authPackage.metadata.roles || [];
    if (roles.map(({ id }) => id).includes(role.id)) {
        return;
    }
    roles.push(role)
    authPackage.metadata.roles = roles;
}
