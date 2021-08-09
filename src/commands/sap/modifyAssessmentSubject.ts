import { Draft } from "immer";
import { SecurityAssessmentPlan, SubjectUniversallyUniqueIdentifierReference } from "oscal";

export type includeOrExclude = "include" | "exclude"
export const modifyAssessmentSubject = (type: string, subject_uuid: SubjectUniversallyUniqueIdentifierReference, selection: includeOrExclude[]) => (sapDraft: Draft<SecurityAssessmentPlan>) => {
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
            .filter(ex => ex.subject_uuid !== subject_uuid) : [];
        include_subjects = include_subjects ? include_subjects!
            .filter(x => x.subject_uuid !== subject_uuid) : [];
        include_subjects.push({ subject_uuid, type });
    }
    if (selection.includes("exclude")) {
        exclude_subjects = exclude_subjects ? exclude_subjects!
            .filter(x => x.subject_uuid !== subject_uuid) : [];
        include_subjects = include_subjects ? include_subjects!
            .filter(x => x.subject_uuid !== subject_uuid) : [];
        exclude_subjects.push({ subject_uuid, type });
    }
    assessment_subjects[subject_index].exclude_subjects = (exclude_subjects?.length || 0) > 0 ? exclude_subjects : undefined;
    assessment_subjects[subject_index].include_subjects = (include_subjects?.length || 0) > 0 ? include_subjects : undefined;
    sapDraft.assessment_subjects = assessment_subjects;
}
