"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.useTasks = exports.useActivities = exports.useImplementations = exports.useActiveControlGroups = exports.useActiveControls = exports.useSSPInventoryitems = void 0;

var _oscal_complete_schema = _interopRequireDefault(require("oscal/src/schemas/oscal_complete_schema.json"));

var _store = require("store");

var _uuid = require("uuid");

var _queries = require("./queries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var oscal_version = "1.0.0";

/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
var oscal = {
  type_enum: (0, _store.composeStore)({
    schema: _oscal_complete_schema["default"],
    definition: "oscal_type_enum",
    initial: {
      "task_type": {
        identifier: "task_type",
        "enum": ["milestone", "action"]
      },
      "address_type": {
        identifier: "address_type",
        "enum": ["home", "business"]
      },
      "phone_type": {
        identifier: "phone_type",
        "enum": ["home", "business"]
      },
      "system_component_type": {
        identifier: "system_component_type",
        "enum": ["subnet", "leveraged-system", "interconnection", "software", "hardware", "service", "policy", "physical", "process-procedure", "plan", "guidance", "standard", "validation"]
      }
    }
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
    var ssp = oscal.ssp.getState().workspace;
    var inventory = ssp && ssp.system_implementation.inventory_items ? ssp.system_implementation.inventory_items : [];
    return inventory;
  },
  index: "uuid",
  synchronize: function synchronize(inventoryRecords) {
    return oscal.ssp.getState().updateWorkspace(function (ssp) {
      ssp.system_implementation.inventory_items = _toConsumableArray(inventoryRecords);
    });
  }
});
exports.useSSPInventoryitems = useSSPInventoryitems;
var useActiveControls = (0, _store.composeVirtualStore)({
  fetch: function fetch() {
    var catalog = oscal.catalog.getState().activeInstance();
    var groups = catalog && typeof catalog.groups !== "undefined" ? catalog.groups : [];
    var controls = groups.flatMap(function (x) {
      return x.controls ? _toConsumableArray(x.controls) : [];
    });
    return (0, _queries.flattenControlTree)(controls);
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
    var groups = catalog && typeof catalog.groups !== "undefined" ? catalog.groups : [];
    return groups;
  },
  index: "uuid",
  synchronize: function synchronize() {
    return new Promise(function (resolve, reject) {
      reject("This store is read only");
    });
  }
});
exports.useActiveControlGroups = useActiveControlGroups;
var useImplementations = (0, _store.composeVirtualStore)({
  fetch: function fetch() {
    var ssp = oscal.ssp.getState().workspace;
    var implementations = ssp && ssp.control_implementation ? ssp.control_implementation.implemented_requirements : [];
    return implementations;
  },
  index: "control_id",
  synchronize: function synchronize(implementations) {
    return oscal.ssp.getState().updateWorkspace(function (ssp) {
      ssp.control_implementation.implemented_requirements = _toConsumableArray(implementations);
    });
  }
});
exports.useImplementations = useImplementations;
var useActivities = (0, _store.composeVirtualStore)({
  fetch: function fetch() {
    var _oscal$sar$getState$w, _oscal$sar$getState$w2;

    var activities = (_oscal$sar$getState$w = oscal.sar.getState().workspace) === null || _oscal$sar$getState$w === void 0 ? void 0 : (_oscal$sar$getState$w2 = _oscal$sar$getState$w.local_definitions) === null || _oscal$sar$getState$w2 === void 0 ? void 0 : _oscal$sar$getState$w2.activities;
    return activities ? activities : [];
  },
  index: "uuid",
  synchronize: function synchronize(activities) {
    return oscal.sar.getState().updateWorkspace(function (sar) {
      if (sar.local_definitions) {
        sar.local_definitions.activities = _toConsumableArray(activities);
      } else {
        sar.local_definitions = {
          activities: activities
        };
      }
    });
  }
});
exports.useActivities = useActivities;
var useTasks = (0, _store.composeVirtualStore)({
  fetch: function fetch() {
    var _oscal$sap$getState$w;

    var tasks = (_oscal$sap$getState$w = oscal.sap.getState().workspace) === null || _oscal$sap$getState$w === void 0 ? void 0 : _oscal$sap$getState$w.tasks;
    return tasks ? tasks : [];
  },
  index: "uuid",
  synchronize: function synchronize(tasks) {
    return oscal.sap.getState().updateWorkspace(function (sap) {
      sap.tasks = _toConsumableArray(tasks);
    });
  }
});
exports.useTasks = useTasks;
var _default = oscal;
exports["default"] = _default;