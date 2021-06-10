import { Draft } from "immer";
import { CatalogOrProfileReference, ControlIdentifier, Profile } from "oscal";
export declare const includeControl: (import_profile: CatalogOrProfileReference, control_id: ControlIdentifier, statement_ids?: string[] | undefined) => (baselineDraft: Draft<Profile>) => void;
