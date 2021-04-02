import { Role } from "oscal";
import { hasPublicationMetadata } from "./insertResponsibleParty";

export const addRoleToMetadata = (role: Role) => (authPackage: hasPublicationMetadata) => {
    if (authPackage.metadata.roles?.map(({ id }) => id).includes(role.id)) {
        return;
    }
    authPackage.metadata.roles ? authPackage.metadata.roles.push(role) : authPackage.metadata.roles = [role];
}
