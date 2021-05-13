import { Property } from "oscal";

export const modifyProperty = (name: string, value: string) => (props: Property[] | undefined) => {
    const other_props = props?.filter(x => x.name !== name) || []
    const modified_prop = { name, value, ns: "https://nrel.gov/oscal" };
    return [...other_props, modified_prop];
}
