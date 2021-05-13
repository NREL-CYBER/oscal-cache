import { Property } from "oscal";
export declare const modifyProperty: (name: string, value: string) => (props: Property[] | undefined) => (Property | {
    name: string;
    value: string;
    ns: string;
})[];
