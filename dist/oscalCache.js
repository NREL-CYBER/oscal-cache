"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _oscal_assessmentPlan_schema = _interopRequireDefault(require("oscal/schemas/oscal_assessment-plan_schema.json"));

var _oscal_assessmentResults_schema = _interopRequireDefault(require("oscal/schemas/oscal_assessment-results_schema.json"));

var _oscal_catalog_schema = _interopRequireDefault(require("oscal/schemas/oscal_catalog_schema.json"));

var _oscal_organization_security_policy = _interopRequireDefault(require("oscal/schemas/oscal_organization_security_policy.json"));

var _oscal_poam_schema = _interopRequireDefault(require("oscal/schemas/oscal_poam_schema.json"));

var _oscal_profile_schema = _interopRequireDefault(require("oscal/schemas/oscal_profile_schema.json"));

var _oscal_ssp_schema = _interopRequireDefault(require("oscal/schemas/oscal_ssp_schema.json"));

var _store = require("store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
var oscal = {
  ssp: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "system_security_plan"
  }),
  information_type: (0, _store.composeStore)({
    schema: _objectSpread(_objectSpread({}, _oscal_ssp_schema["default"].definitions.system_information.properties.information_types.items), {}, {
      definitions: _oscal_ssp_schema["default"].definitions
    })
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
  inventory: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "inventory_item"
  }),
  component: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "system_component"
  }),
  risk: (0, _store.composeStore)({
    schema: _oscal_poam_schema["default"],
    definition: "risk"
  }),
  resource: (0, _store.composeStore)({
    definition: "back_batter_resource",
    schema: _oscal_ssp_schema["default"]
  }),
  authorization_boundary: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "authorization_boundary"
  }),
  system_characteristics: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "system_characteristics"
  }),
  inventory_item: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "inventory_item"
  }),
  data_flow: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "data_flow"
  }),
  network_architecture: (0, _store.composeStore)({
    schema: _oscal_ssp_schema["default"],
    definition: "network_architecture"
  }),
  control: (0, _store.composeStore)({
    schema: _oscal_catalog_schema["default"],
    definition: "control"
  }),
  control_group: (0, _store.composeStore)({
    schema: _oscal_catalog_schema["default"],
    definition: "control_group"
  }),
  control_implementation: (0, _store.composeStore)({
    schema: _oscal_catalog_schema["default"],
    definition: "control_based_requirement"
  })
};
var _default = oscal;
exports["default"] = _default;