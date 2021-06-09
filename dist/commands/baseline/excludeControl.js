"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.excludeControl = void 0;

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
      var _ref2 = profile || {
        include: {
          calls: []
        }
      },
          exclude_controls = _ref2.exclude_controls,
          include_all = _ref2.include_all,
          include_controls = _ref2.include_controls;

      var control_ids = include_controls === null || include_controls === void 0 ? void 0 : include_controls.map(function (x) {
        return x ? x.control_id : "";
      });

      if (control_ids !== null && control_ids !== void 0 && control_ids.includes(control_id)) {
        var _baselineDraft$import;

        var calls = ((_baselineDraft$import = baselineDraft.imports[profileIndex].include_controls) === null || _baselineDraft$import === void 0 ? void 0 : _baselineDraft$import.filter(function (x) {
          return x.control_id && x.control_id === control_id;
        })) || [];

        if ((calls === null || calls === void 0 ? void 0 : calls.length) > 0) {
          var _baselineDraft$import2;

          calls.forEach(function (call) {
            var index = baselineDraft.imports[profileIndex].include_controls.findIndex(function (x) {
              return x.control_id === call.control_id;
            });

            if (index !== -1) {
              delete baselineDraft.imports[profileIndex].include_controls[index];
            }
          });
          baselineDraft.imports[profileIndex].include_controls = (_baselineDraft$import2 = baselineDraft.imports[profileIndex].include_controls) === null || _baselineDraft$import2 === void 0 ? void 0 : _baselineDraft$import2.filter(function (x) {
            return x !== null;
          });
        }
      }
    }
  };
};

exports.excludeControl = excludeControl;