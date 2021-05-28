import { Resource, BackMatter } from "oscal";

export const insertResource: (resource: Resource) => (oscal_document: { back_matter?: BackMatter }) => void = (resource) => (oscal_document) => {
    const other_resources = oscal_document.back_matter?.resources?.filter(x => x.uuid !== resource.uuid) || [];
    const resources = [resource, ...other_resources];
    if (oscal_document.back_matter) {
        oscal_document.back_matter.resources = resources;
    } else {
        oscal_document.back_matter = { resources }
    }
}