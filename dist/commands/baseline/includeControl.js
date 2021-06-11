"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.includeControl = void 0;

var _queries = require("src/queries");

var includeControl = function includeControl(import_profile, control_id, statement_ids) {
  return function (baselineDraft) {
    var profileIndex = baselineDraft.imports.findIndex(function (x) {
      return x.href === import_profile;
    });
    var profile = baselineDraft.imports[profileIndex];

    if (profile) {
      var _ref = profile || {
        include_controls: []
      },
          include_controls = _ref.include_controls;

      var control_ids = (0, _queries.profileInclusions)(baselineDraft);

      if (control_ids !== null && control_ids !== void 0 && control_ids.includes(control_id)) {//This Control ID has been included in our profile already
        //Since we just trying to include a control, we can just exit the function
      } else if (include_controls) {
        var _baselineDraft$import;

        var with_ids_element = (_baselineDraft$import = baselineDraft.imports[profileIndex].include_controls) === null || _baselineDraft$import === void 0 ? void 0 : _baselineDraft$import.find(function (x) {
          return typeof x.with_ids !== "undefined";
        });

        if (with_ids_element) {
          var _with_ids_element$wit;

          (_with_ids_element$wit = with_ids_element.with_ids) === null || _with_ids_element$wit === void 0 ? void 0 : _with_ids_element$wit.push(control_id);
        }
      } else {
        baselineDraft.imports[profileIndex].include_controls = [{
          with_ids: [control_id]
        }];
      }
    } else {
      // Profile doesn't exist yet.
      // this shouldn't really happen.
      // if it does lets create a new profile.
      baselineDraft.imports.push({
        href: import_profile,
        include_controls: [{
          with_ids: [control_id]
        }]
      });
    }
  };
};

exports.includeControl = includeControl;