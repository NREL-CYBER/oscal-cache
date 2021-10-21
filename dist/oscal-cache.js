"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.useWorkspaceSSPImplementedRequirements = exports.useActiveControlGroups = exports.useActiveControls = exports.useSSPInventoryitems = void 0;

var _oscal = require("oscal");

var _oscal_complete_schema = _interopRequireDefault(require("oscal/src/schemas/oscal_complete_schema.json"));

var _store = require("store");

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var oscal_version = "1.0.0";

/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
var oscal = {
  component_type_info: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "component_type_info",
    initial: _oscal.SystemComponentTypes.map(function (title) {
      return {
        title: title,
        uuid: (0, _uuid.v4)()
      };
    }).reduce(function (a, b) {
      return _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, b.uuid, {
        title: b.title,
        uuid: b.uuid
      }));
    }, {})
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
        title: "System Security Plan",
        last_modified: new Date().toISOString(),
        version: "0.0.0",
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
    definition: "organization_mission_statement"
  }),
  poam: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "plan_of_action_and_milestones",
    workspace: {
      uuid: (0, _uuid.v4)(),
      metadata: {
        title: "Plan of Action & Milestones",
        last_modified: new Date().toISOString(),
        version: "0.0.0",
        oscal_version: oscal_version
      },
      poam_items: []
    }
  }),
  sar: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "assessment_results",
    workspace: {
      uuid: (0, _uuid.v4)(),
      metadata: {
        title: "Assessment Results",
        last_modified: new Date().toISOString(),
        version: "0.0.0",
        oscal_version: oscal_version
      },
      import_ap: {
        href: ""
      },
      results: []
    }
  }),
  sap: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "assessment_plan",
    workspace: {
      uuid: (0, _uuid.v4)(),
      metadata: {
        title: "Assessment Plan",
        last_modified: new Date().toISOString(),
        version: "0.0.0",
        oscal_version: oscal_version
      },
      import_ssp: {
        href: ""
      },
      reviewed_controls: {
        control_selections: []
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
      uuid: (0, _uuid.v4)(),
      metadata: {
        title: "Component Definition",
        last_modified: new Date().toISOString(),
        version: "0.0.0",
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
  })
};
var useSSPInventoryitems = (0, _store.composeVirtualStore)({
  fetch: function fetch() {
    var _oscal$ssp$getState$w;

    var inventory = ((_oscal$ssp$getState$w = oscal.ssp.getState().workspace) === null || _oscal$ssp$getState$w === void 0 ? void 0 : _oscal$ssp$getState$w.system_implementation.inventory_items) || [];
    return inventory;
  },
  index: "uuid",
  synchronize: function synchronize(inventoryRecords) {
    return oscal.ssp.getState().updateWorkspace(function (ssp) {
      ssp.system_implementation.inventory_items = inventoryRecords;
    });
  }
});
exports.useSSPInventoryitems = useSSPInventoryitems;
var useActiveControls = (0, _store.composeVirtualStore)({
  fetch: function fetch() {
    var catalog = oscal.catalog.getState().activeInstance();
    var groups = catalog && catalog.groups ? catalog.groups : [];
    var controls = groups.flatMap(function (x) {
      return x.controls ? x.controls : [];
    }).flatMap(function (x) {
      return x.controls ? x.controls : [];
    }).filter(Boolean);
    return controls;
  },
  index: "id",
  synchronize: function synchronize() {
    return new Promise(function (resolve, reject) {
      reject("This store is read only");
    });
  }
});
exports.useActiveControls = useActiveControls;
var useActiveControlGroups = (0, _store.composeVirtualStore)({
  fetch: function fetch() {
    var catalog = oscal.catalog.getState().activeInstance();
    var groups = catalog && catalog.groups ? catalog.groups : [];
    return groups.flatMap(function (x) {
      return x.groups;
    }).filter(Boolean);
  },
  index: "uuid",
  synchronize: function synchronize() {
    return new Promise(function (resolve, reject) {
      reject("This store is read only");
    });
  }
});
exports.useActiveControlGroups = useActiveControlGroups;
var useWorkspaceSSPImplementedRequirements = (0, _store.composeVirtualStore)({
  fetch: function fetch() {
    var _oscal$ssp$getState$w2;

    var implemented_requirements = ((_oscal$ssp$getState$w2 = oscal.ssp.getState().workspace) === null || _oscal$ssp$getState$w2 === void 0 ? void 0 : _oscal$ssp$getState$w2.control_implementation.implemented_requirements) || [];
    return implemented_requirements;
  },
  index: "control_id",
  synchronize: function synchronize(inventoryRecords) {
    return oscal.ssp.getState().updateWorkspace(function (ssp) {
      ssp.control_implementation.implemented_requirements = inventoryRecords;
    });
  }
});
exports.useWorkspaceSSPImplementedRequirements = useWorkspaceSSPImplementedRequirements;
var _default = oscal;
exports["default"] = _default;