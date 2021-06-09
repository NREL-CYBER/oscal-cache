"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileExclusions = exports.profileInclusions = exports.profileAlterations = exports.profileModifications = void 0;

/**
 * Get Control ID's of all included or altered in baseline
 * @param baseline
 */
var profileModifications = function profileModifications(baseline) {
  var _baseline$modify, _baseline$modify$alte;

  var modifications = (_baseline$modify = baseline.modify) === null || _baseline$modify === void 0 ? void 0 : (_baseline$modify$alte = _baseline$modify.alters) === null || _baseline$modify$alte === void 0 ? void 0 : _baseline$modify$alte.map(function (x) {
    return x ? x.control_id : "";
  });
  return modifications || [];
};

exports.profileModifications = profileModifications;

var profileAlterations = function profileAlterations(baseline) {
  var alterations = baseline && baseline.modify && baseline.modify.alters && baseline.modify.alters;
  return (alterations === null || alterations === void 0 ? void 0 : alterations.filter(Boolean)) || [];
};

exports.profileAlterations = profileAlterations;

var profileInclusions = function profileInclusions(baseline) {
  var inclusions = baseline.imports.flatMap(function (_ref) {
    var include_controls = _ref.include_controls;
    return include_controls === null || include_controls === void 0 ? void 0 : include_controls.map(function (x) {
      return x ? x.control_id : "";
    });
  }).filter(Boolean);
  return inclusions || [];
};

exports.profileInclusions = profileInclusions;

var profileExclusions = function profileExclusions(baseline) {
  var exclusions = baseline.imports.flatMap(function (_ref2) {
    var exclude_controls = _ref2.exclude_controls;
    return exclude_controls === null || exclude_controls === void 0 ? void 0 : exclude_controls.map(function (x) {
      return x ? x.control_id : "";
    });
  }).filter(Boolean);
  return exclusions || [];
};

exports.profileExclusions = profileExclusions;