import { Draft } from "immer";
import { SecurityAssessmentPlan, SubjectUniversallyUniqueIdentifierReference } from "oscal";
export declare type includeOrExclude = "include" | "exclude";
export declare const modifyAssessmentSubject: (type: string, subject_uuid: SubjectUniversallyUniqueIdentifierReference, selection: includeOrExclude[]) => (sapDraft: Draft<SecurityAssessmentPlan>) => void;
