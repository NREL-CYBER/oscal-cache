import { Draft } from "immer";
import { SecurityAssessmentPlan, UUIDReference } from "oscal";
declare type includeOrExclude = "include" | "exclude";
declare const modifyAssessmentSubject: (type: string, uuid: UUIDReference, selection: includeOrExclude[]) => (sapDraft: Draft<SecurityAssessmentPlan>) => void;
export default modifyAssessmentSubject;
