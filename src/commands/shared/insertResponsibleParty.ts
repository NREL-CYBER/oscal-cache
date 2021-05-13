import { PublicationMetadata, RoleIdentifier, ResponsibleParty } from "oscal";
import { Draft } from "immer";
export interface hasPublicationMetadata { metadata: PublicationMetadata };

export const insertResponsibleParty = <T extends hasPublicationMetadata>(role_id: RoleIdentifier, new_responsible_party: ResponsibleParty) => (target: Draft<T>) => {
    if (target.metadata.responsible_parties) {
        const responsible_party = target.metadata.responsible_parties[role_id];
        if (responsible_party) {
            while (responsible_party.party_uuids.length) {
                responsible_party.party_uuids.pop();
            }
            new_responsible_party.party_uuids.forEach((party_uuid) => {
                responsible_party.party_uuids.push(party_uuid);
            })
        } else {
            target.metadata.responsible_parties[role_id] = new_responsible_party
        }
    } else {
        target.metadata.responsible_parties = { [role_id]: new_responsible_party }
    }
}