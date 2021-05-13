"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _oscal_assessmentPlan_schema = _interopRequireDefault(require("oscal/schemas/oscal_assessment-plan_schema.json"));

var _oscal_assessmentResults_schema = _interopRequireDefault(require("oscal/schemas/oscal_assessment-results_schema.json"));

var _oscal_catalog_schema = _interopRequireDefault(require("oscal/schemas/oscal_catalog_schema.json"));

var _oscal_organization_security_policy = _interopRequireDefault(require("oscal/schemas/oscal_organization_security_policy.json"));

var _oscal_component_schema = _interopRequireDefault(require("oscal/schemas/oscal_component_schema.json"));

var _oscal_poam_schema = _interopRequireDefault(require("oscal/schemas/oscal_poam_schema.json"));

var _oscal_profile_schema = _interopRequireDefault(require("oscal/schemas/oscal_profile_schema.json"));

var _oscal_ssp_schema = _interopRequireDefault(require("oscal/schemas/oscal_ssp_schema.json"));

var _store = require("store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
var oscal = {
  ssp: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "system_security_plan"
  }),
  information_type: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "information_type"
  }),
  osp: (0, _store.composeStore)({
    schema: _oscal_organization_security_policy["default"],
    definition: "organization_security_policy"
  }),
  poam: (0, _store.composeStore)({
    schema: _oscal_poam_schema["default"],
    definition: "plan_of_action_and_milestones"
  }),
  sar: (0, _store.composeStore)({
    schema: _oscal_assessmentResults_schema["default"],
    definition: "assessment_results"
  }),
  sap: (0, _store.composeStore)({
    schema: _oscal_assessmentPlan_schema["default"],
    definition: "assessment_plan"
  }),
  baseline_profile: (0, _store.composeStore)({
    schema: _oscal_profile_schema["default"],
    definition: "profile"
  }),
  catalog: (0, _store.composeStore)({
    schema: _oscal_catalog_schema["default"],
    definition: "catalog"
  }),
  party: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "party"
  }),
  role: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "role"
  }),
  component: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "system_component"
  }),
  capability: (0, _store.composeStore)({
    schema: _oscal_component_schema["default"],
    definition: "capability"
  }),
  component_definition: (0, _store.composeStore)({
    schema: _oscal_component_schema["default"],
    definition: "component_definition"
  }),
  risk: (0, _store.composeStore)({
    schema: _oscal_poam_schema["default"],
    definition: "risk"
  }),
  resource: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "resource"
  }),
  inventory_item: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "inventory_item"
  }),
  control: (0, _store.composeStore)({
    schema: _oscal_catalog_schema["default"],
    definition: "control"
  }),
  control_group: (0, _store.composeStore)({
    schema: _oscal_catalog_schema["default"],
    definition: "control_group"
  }),
  implemented_requirement: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "implemented_requirement"
  })
};
var _default = oscal;
exports["default"] = _default;