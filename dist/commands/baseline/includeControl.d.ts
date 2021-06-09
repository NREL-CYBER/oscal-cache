import { Draft } from "immer";
import { Profile } from "oscal";
import { CatalogOrProfileReference, ControlIdentifier } from "oscal";
export declare const includeControl: (import_profile: CatalogOrProfileReference, control_id: ControlIdentifier, statement_ids?: string[] | undefined) => (baselineDraft: Draft<Profile>) => void;
