import { Control, Part } from "oscal"

/**
 * Calculate the amount of objectives in a control
 * @param control 
 */
export const controlObjectiveParts = (control: Control) => {
    if (!control.parts || control.parts.length === 0) {
        return 0;
    }
    const gatherParts = (parts: Part[]): number => {
        return parts && parts.map(x => x.parts ? gatherParts(x.parts) : 1).reduce((a, b) => a + b);
    }
    const mainObjectives = control.parts && control.parts.filter(x => x.name === 'objective')
    return mainObjectives ? mainObjectives.map((objective) => {
        return objective.parts ? gatherParts(objective.parts) : 1;
    }).reduce((a, b) => a + b) : 1;
}
