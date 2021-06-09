import { Draft } from "immer";
import { Profile } from "oscal";
import { CatalogOrProfileReference, ControlIdentifier } from "oscal";
export declare const excludeControl: (import_profile: CatalogOrProfileReference, control_id: ControlIdentifier, with_child_controls?: "yes" | "no" | undefined) => (baselineDraft: Draft<Profile>) => void;
