import { Property } from "oscal";
import { propIndex } from "../queries/propertyQueries";

export const modifyProperty = (name: string, value: string) => (props: Property[] | undefined) => {
    const index = propIndex(name)((props))
    const modified_prop = { name, value, ns: "https://nrel.gov/oscal" };
    if (typeof index === "boolean" && index === false) {
        props = [modified_prop];
    }
    else if (typeof (index) === 'number') {
        if (index === 0) {
            props = [modified_prop];
        } else {
            props![index] = modified_prop
        }
    } else {
        props!.push(modified_prop);
    }

}
