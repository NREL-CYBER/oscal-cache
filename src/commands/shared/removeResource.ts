import { Resource, BackMatter } from "oscal";

export const removeResource: (resource: Resource) => (oscal_document: { back_matter?: BackMatter }) => void = (resource) => (oscal_document) => {
    const resources = oscal_document.back_matter?.resources?.filter(x => x.uuid !== resource.uuid) || [];
    if (oscal_document.back_matter) {
        oscal_document.back_matter.resources = resources;
    } else {
        oscal_document.back_matter = { resources }
    }
}