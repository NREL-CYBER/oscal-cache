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
      var _include$calls;

      var _ref2 = profile || {
        include: {
          calls: []
        }
      },
          include = _ref2.include;

      var control_ids = include === null || include === void 0 ? void 0 : (_include$calls = include.calls) === null || _include$calls === void 0 ? void 0 : _include$calls.map(function (x) {
        return x ? x.control_id : "";
      });

      if (control_ids !== null && control_ids !== void 0 && control_ids.includes(control_id)) {
        var _calls;

        var calls = ((_calls = baselineDraft.imports[profileIndex].include.calls) === null || _calls === void 0 ? void 0 : _calls.filter(function (x) {
          return x.control_id && x.control_id === control_id;
        })) || [];

        if ((calls === null || calls === void 0 ? void 0 : calls.length) > 0) {
          var _baselineDraft$import, _baselineDraft$import2;

          calls.forEach(function (call) {
            var index = baselineDraft.imports[profileIndex].include.calls.findIndex(function (x) {
              return x.control_id === call.control_id;
            });

            if (index !== -1) {
              delete baselineDraft.imports[profileIndex].include.calls[index];
            }
          });
          baselineDraft.imports[profileIndex].include.calls = (_baselineDraft$import = baselineDraft.imports[profileIndex].include) === null || _baselineDraft$import === void 0 ? void 0 : (_baselineDraft$import2 = _baselineDraft$import.calls) === null || _baselineDraft$import2 === void 0 ? void 0 : _baselineDraft$import2.filter(function (x) {
            return x !== null;
          });
        }
      }
    }
  };
};

exports.excludeControl = excludeControl;