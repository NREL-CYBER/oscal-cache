import { Property } from "oscal";
declare const modifyProperty: (name: string, value: string) => (props: Property[] | undefined) => void;
export default modifyProperty;
