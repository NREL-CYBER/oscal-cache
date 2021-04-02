import { Draft } from "immer";
import { SecurityAssessmentPlan, UUIDReference } from "oscal";

type includeOrExclude = "include" | "exclude"
const modifyAssessmentSubject = (type: string, uuid: UUIDReference, selection: includeOrExclude[]) => (sapDraft: Draft<SecurityAssessmentPlan>) => {
    let subject_index = sapDraft.assessment_subjects!.findIndex(x => x.type === type)
    if (subject_index === -1) {
        sapDraft.assessment_subjects!.push({ type })
    }
    subject_index = sapDraft.assessment_subjects!.findIndex(x => x.type === type)
    const subject = sapDraft.assessment_subjects!.find(x => x.type === type);
    let { exclude_subjects, include_subjects } = subject!;
    if (selection.includes("include")) {
        exclude_subjects = exclude_subjects ? exclude_subjects!
            .filter(ex => ex.uuid_ref !== uuid) : [];
        include_subjects = include_subjects ? include_subjects!
            .filter(x => x.uuid_ref !== uuid) : [];
        include_subjects.push({ uuid_ref: uuid });
    }
    if (selection.includes("exclude")) {
        exclude_subjects = exclude_subjects ? exclude_subjects!
            .filter(x => x.uuid_ref !== uuid) : [];
        include_subjects = include_subjects ? include_subjects!
            .filter(x => x.uuid_ref !== uuid) : [];
        exclude_subjects.push({ uuid_ref: uuid });
    }
    sapDraft.assessment_subjects![subject_index].exclude_subjects = exclude_subjects;
    sapDraft.assessment_subjects![subject_index].include_subjects = include_subjects;

}
export default modifyAssessmentSubject;