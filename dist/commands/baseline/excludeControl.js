"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.excludeControl = void 0;

var _queries = require("../../queries");

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
      var control_ids = (0, _queries.profileInclusions)(baselineDraft).filter(Boolean);

      if (control_ids !== null && control_ids !== void 0 && control_ids.includes(control_id)) {
        var include_controls = profile.include_controls;

        if (include_controls) {
          include_controls = include_controls.map(function (_ref2, i) {
            var _with_ids;

            var with_ids = _ref2.with_ids,
                matching = _ref2.matching,
                with_child_controls = _ref2.with_child_controls;
            with_ids = (_with_ids = with_ids) === null || _with_ids === void 0 ? void 0 : _with_ids.filter(function (x) {
              return x !== control_id;
            });
            return {
              with_child_controls: with_child_controls,
              with_ids: with_ids,
              matching: matching
            };
          });
          baselineDraft.imports[profileIndex].include_controls = include_controls;
        }
      }
    }
  };
};

exports.excludeControl = excludeControl;