import { hasPublicationMetadata } from "./insertResponsibleParty";

export const incrementVersion = (version: string) => (authPackage: hasPublicationMetadata) => {
    authPackage.metadata.version
    authPackage.metadata.revisions?.push({
        ...authPackage.metadata
    })
    authPackage.metadata.last_modified = new Date().toISOString();
    authPackage.metadata.published = new Date().toISOString();
}
