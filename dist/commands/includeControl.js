"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.includeControl = void 0;

var includeControl = function includeControl(import_profile, control_id, with_child_controls) {
  return function (baselineDraft) {
    var profileIndex = baselineDraft.imports.findIndex(function (x) {
      return x.href === import_profile;
    });
    var profile = baselineDraft.imports[profileIndex];

    if (profile) {
      var _include$calls;

      var _ref = profile || {
        include: {
          calls: []
        }
      },
          include = _ref.include;

      var control_ids = include === null || include === void 0 ? void 0 : (_include$calls = include.calls) === null || _include$calls === void 0 ? void 0 : _include$calls.map(function (x) {
        return x ? x.control_id : "";
      });

      if (control_ids !== null && control_ids !== void 0 && control_ids.includes(control_id)) {//This Control ID has been included in our profile already
        //Since we just trying to include a control, we can just exit the function
      } else if (include !== null && include !== void 0 && include.calls) {
        baselineDraft.imports[profileIndex].include.calls.push({
          control_id: control_id,
          with_child_controls: with_child_controls
        });
      } else {
        baselineDraft.imports[profileIndex].include = {
          calls: [{
            control_id: control_id,
            with_child_controls: with_child_controls
          }]
        };
      }
    } else {
      // Profile doesn't exist yet.
      // this shouldn't really happen.
      // if it does lets create a new profile.
      baselineDraft.imports.push({
        href: import_profile,
        exclude: {},
        include: {
          calls: [{
            control_id: control_id,
            with_child_controls: with_child_controls
          }]
        }
      });
    }
  };
};

exports.includeControl = includeControl;