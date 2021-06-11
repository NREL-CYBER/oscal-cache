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
  var calls = baseline.imports.flatMap(function (x) {
    var _x$include_controls;

    return (_x$include_controls = x.include_controls) === null || _x$include_controls === void 0 ? void 0 : _x$include_controls.flatMap(function (x) {
      return x.with_ids || [];
    });
  });
  return calls || [];
};

exports.profileInclusions = profileInclusions;

var profileExclusions = function profileExclusions(baseline) {
  var calls = baseline.imports.flatMap(function (x) {
    var _x$exclude_controls;

    return (_x$exclude_controls = x.exclude_controls) === null || _x$exclude_controls === void 0 ? void 0 : _x$exclude_controls.flatMap(function (x) {
      return x.with_ids || [];
    });
  });
  return calls || [];
};

exports.profileExclusions = profileExclusions;