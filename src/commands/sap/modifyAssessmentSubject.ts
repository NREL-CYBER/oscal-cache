import { Draft } from "immer";
import { SecurityAssessmentPlan, UUIDReference } from "oscal";

export type includeOrExclude = "include" | "exclude"
export const modifyAssessmentSubject = (type: string, uuid: UUIDReference, selection: includeOrExclude[]) => (sapDraft: Draft<SecurityAssessmentPlan>) => {
    const assessment_subjects = sapDraft.assessment_subjects || []
    let subject_index = assessment_subjects?.findIndex(x => x.type === type)
    if (subject_index === -1) {
        assessment_subjects!.push({ type })
    }
    subject_index = assessment_subjects!.findIndex(x => x.type === type)
    const subject = assessment_subjects!.find(x => x.type === type);
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
    assessment_subjects[subject_index].exclude_subjects = exclude_subjects;
    assessment_subjects[subject_index].include_subjects = include_subjects;
    sapDraft.assessment_subjects = assessment_subjects;
}
