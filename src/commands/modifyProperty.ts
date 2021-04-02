import { Property } from "oscal";
import { propIndex } from "../queries/propertyQueries";

const modifyProperty = (name: string, value: string) => (props: Property[] | undefined) => {
    const index = propIndex(name)((props))
    const modified_prop = { name, value, ns: "https://nrel.gov/oscal" };
    if (typeof index === "boolean" && index === false) {
        props = [modified_prop];
    }
    else if (typeof (index) === 'number') {
        props![index] = modified_prop
    } else {
        props!.push(modified_prop);
    }

}
export default modifyProperty;