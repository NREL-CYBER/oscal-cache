import { Draft } from "immer";
import { SecurityAssessmentPlan, UUIDReference } from "oscal";
export declare type includeOrExclude = "include" | "exclude";
export declare const modifyAssessmentSubject: (type: string, uuid: UUIDReference, selection: includeOrExclude[]) => (sapDraft: Draft<SecurityAssessmentPlan>) => void;
