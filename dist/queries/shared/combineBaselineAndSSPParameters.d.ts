import { SystemSecurityPlan, Profile } from "oscal";
export declare const combineBaslineAndSSPParameters: (baseline?: Partial<Profile>, ssp?: Partial<SystemSecurityPlan>) => {
    param_id: string;
    values: string[];
}[];
