import { ControlBasedRequirement } from "oscal"
export const insertImplementation = (implementations: ControlBasedRequirement[] = [], implementation: ControlBasedRequirement) => {
    const other_implementations = implementations.filter(x => x.control_id !== implementation.control_id);
    return [...other_implementations, implementation]
}