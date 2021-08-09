"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _oscal_complete_schema = _interopRequireDefault(require("oscal/src/schemas/oscal_complete_schema.json"));

var _store = require("store");

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var oscal_version = "1.0.0";

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
    workspace: {
      "uuid": (0, _uuid.v4)(),
      "metadata": {
        "title": "",
        "last_modified": "",
        "version": "",
        oscal_version: oscal_version
      },
      "import_profile": {
        "href": ""
      },
      "system_characteristics": {
        "system_ids": [],
        "system_name": "",
        "description": "",
        "security_sensitivity_level": "",
        "system_information": {
          "information_types": []
        },
        "security_impact_level": {
          "security_objective_confidentiality": "",
          "security_objective_integrity": "",
          "security_objective_availability": ""
        },
        "status": {
          "state": ""
        },
        "authorization_boundary": {
          "description": ""
        }
      },
      "system_implementation": {
        "users": [],
        "components": []
      },
      "control_implementation": {
        "description": "",
        "implemented_requirements": []
      },
      "back_matter": {
        "resources": []
      }
    }
  }),
  information_type: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "information_type"
  }),
  oms: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "organizationMissionStatement"
  }),
  poam: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "plan_of_action_and_milestones",
    workspace: {
      "uuid": (0, _uuid.v4)(),
      "metadata": {
        "title": "",
        "last_modified": "",
        "version": "",
        oscal_version: oscal_version
      },
      "poam_items": []
    }
  }),
  sar: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "assessment_results",
    workspace: {
      "uuid": (0, _uuid.v4)(),
      "metadata": {
        "title": "",
        "last_modified": "",
        "version": "",
        oscal_version: oscal_version
      },
      "import_ap": {
        "href": ""
      },
      "results": []
    }
  }),
  sap: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "assessment_plan",
    workspace: {
      "uuid": (0, _uuid.v4)(),
      "metadata": {
        "title": "",
        "last_modified": "",
        "version": "",
        oscal_version: oscal_version
      },
      "import_ssp": {
        "href": ""
      },
      "reviewed_controls": {
        "control_selections": []
      }
    }
  }),
  profile: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "profile"
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
    definition: "component_definition",
    workspace: {
      "uuid": (0, _uuid.v4)(),
      "metadata": {
        "title": "",
        "last_modified": "",
        "version": "",
        oscal_version: oscal_version
      }
    }
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