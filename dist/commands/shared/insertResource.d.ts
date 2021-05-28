import { Resource, BackMatter } from "oscal";
export declare const insertResource: (resource: Resource) => (oscal_document: {
    back_matter: BackMatter;
}) => void;
