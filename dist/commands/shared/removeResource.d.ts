import { Resource, BackMatter } from "oscal";
export declare const removeResource: (resource: Resource) => (oscal_document: {
    back_matter: BackMatter;
}) => void;
