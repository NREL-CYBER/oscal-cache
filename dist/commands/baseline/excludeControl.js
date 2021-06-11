"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.excludeControl = void 0;

var _queries = require("src/queries");

var excludeControl = function excludeControl(import_profile, control_id, with_child_controls) {
  return function (baselineDraft) {
    var _baselineDraft$modify, _baselineDraft$modify2;

    var profileIndex = baselineDraft.imports.findIndex(function (_ref) {
      var href = _ref.href;
      return href === import_profile;
    });
    var profile = baselineDraft.imports[profileIndex];
    var alteration = (_baselineDraft$modify = baselineDraft.modify) === null || _baselineDraft$modify === void 0 ? void 0 : (_baselineDraft$modify2 = _baselineDraft$modify.alters) === null || _baselineDraft$modify2 === void 0 ? void 0 : _baselineDraft$modify2.find(function (alter) {
      return alter.control_id && alter.control_id === control_id;
    });

    if (alteration) {
      baselineDraft.modify.alters = baselineDraft.modify.alters.filter(function (alter) {
        return alter.control_id && alter.control_id !== control_id;
      });
    }

    if (profile) {
      var exclude_controls = profile.exclude_controls,
          include_all = profile.include_all,
          include_controls = profile.include_controls;
      var control_ids = (0, _queries.profileInclusions)(baselineDraft);

      if (control_ids !== null && control_ids !== void 0 && control_ids.includes(control_id)) {
        if (include_controls) {
          include_controls.forEach(function (call) {
            var _matching_call$with_i;

            var matching_call = include_controls === null || include_controls === void 0 ? void 0 : include_controls.find(function (x) {
              var _x$with_ids;

              return (_x$with_ids = x.with_ids) === null || _x$with_ids === void 0 ? void 0 : _x$with_ids.includes(control_id);
            });
            var with_id_call_index = matching_call && ((_matching_call$with_i = matching_call.with_ids) === null || _matching_call$with_i === void 0 ? void 0 : _matching_call$with_i.findIndex(function (x) {
              return x === control_id;
            })) || -1;

            if (with_id_call_index !== -1) {
              matching_call === null || matching_call === void 0 ? true : delete matching_call.with_ids[with_id_call_index];
            }
          });
        }
      }
    }
  };
};

exports.excludeControl = excludeControl;