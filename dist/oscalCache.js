"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _oscal_complete_schema = _interopRequireDefault(require("oscal/src/schemas/oscal_complete_schema.json"));

var _store = require("store");

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
var oscal = {
  leveraged_authentication: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "leveraged_authentication"
  }),
  observation: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "observation"
  }),
  assessment_platform: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "assessment_platform"
  }),
  ssp: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "system_security_plan",
    workspaceGenerationMap: {
      uuid: _uuid.v4
    }
  }),
  information_type: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "information_type"
  }),
  osp: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "organization_security_policy",
    workspaceGenerationMap: {
      uuid: _uuid.v4
    }
  }),
  poam: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "plan_of_action_and_milestones",
    workspaceGenerationMap: {
      uuid: _uuid.v4
    }
  }),
  sar: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "assessment_results",
    workspaceGenerationMap: {
      uuid: _uuid.v4
    }
  }),
  sap: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "assessment_plan",
    workspaceGenerationMap: {
      uuid: _uuid.v4
    }
  }),
  profile: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "profile",
    workspaceGenerationMap: {
      uuid: _uuid.v4
    }
  }),
  catalog: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "catalog"
  }),
  party: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "party"
  }),
  role: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "role"
  }),
  component: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "system_component"
  }),
  component_definition: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "component_definition"
  }),
  risk: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "risk"
  }),
  resource: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "resource"
  }),
  inventory_item: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "inventory_item"
  }),
  control: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "control"
  }),
  group: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "group"
  }),
  implemented_requirement: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "implemented_requirement"
  })
};
var _default = oscal;
exports["default"] = _default;