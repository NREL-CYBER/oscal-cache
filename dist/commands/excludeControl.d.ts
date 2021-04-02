import { Draft } from "immer";
import { Profile } from "oscal";
import { CatalogOrProfileReference, ControlID } from "oscal/dist/profile";
export declare const excludeControl: (import_profile: CatalogOrProfileReference, control_id: ControlID, with_child_controls?: "yes" | "no" | undefined) => (baselineDraft: Draft<Profile>) => void;
