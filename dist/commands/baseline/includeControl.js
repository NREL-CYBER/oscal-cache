"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.includeControl = void 0;

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

      var control_ids = include_controls && include_controls.map(function (x) {
        return x ? x.control_id : "";
      }) || [];

      if (control_ids !== null && control_ids !== void 0 && control_ids.includes(control_id)) {//This Control ID has been included in our profile already
        //Since we just trying to include a control, we can just exit the function
      } else if (include_controls) {
        baselineDraft.imports[profileIndex].include_controls.push({
          control_id: control_id,
          statement_ids: statement_ids
        });
      } else {
        baselineDraft.imports[profileIndex].include_controls = [{
          control_id: control_id
        }];
      }
    } else {
      // Profile doesn't exist yet.
      // this shouldn't really happen.
      // if it does lets create a new profile.
      baselineDraft.imports.push({
        href: import_profile,
        include_controls: [{
          control_id: control_id,
          statement_ids: statement_ids
        }]
      });
    }
  };
};

exports.includeControl = includeControl;