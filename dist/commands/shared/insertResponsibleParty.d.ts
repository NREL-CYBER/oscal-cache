import { PublicationMetadata, RoleIdentifier, ResponsibleParty } from "oscal";
import { Draft } from "immer";
export interface hasPublicationMetadata {
    metadata: PublicationMetadata;
}
export declare const insertResponsibleParty: <T extends hasPublicationMetadata>(role_id: RoleIdentifier, new_responsible_party: ResponsibleParty) => (target: Draft<T>) => void;
