import { PublicationMetadata, RoleIdentifier, ResponsibleParty } from "oscal";
import { Draft } from "immer";
export interface hasPublicationMetadata { metadata: PublicationMetadata };

export const insertResponsibleParty = <T extends hasPublicationMetadata>(new_responsible_party: ResponsibleParty) => (target: Draft<T>) => {
    const { role_id } = new_responsible_party;
    const other_responsible_parties = target.metadata.responsible_parties?.filter(x => x.role_id !== role_id) || [];
    const responsible_parties = [...other_responsible_parties, new_responsible_party] || [new_responsible_party]
    target.metadata.responsible_parties = responsible_parties;
}