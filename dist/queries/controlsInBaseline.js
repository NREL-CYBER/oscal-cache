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
  return alterations;
};

exports.profileAlterations = profileAlterations;

var profileInclusions = function profileInclusions(baseline) {
  var inclusions = baseline.imports.flatMap(function (_ref) {
    var _include$calls;

    var include = _ref.include;
    return include === null || include === void 0 ? void 0 : (_include$calls = include.calls) === null || _include$calls === void 0 ? void 0 : _include$calls.map(function (x) {
      return x ? x.control_id : "";
    });
  });
  return inclusions || [];
};

exports.profileInclusions = profileInclusions;

var profileExclusions = function profileExclusions(baseline) {
  var exclusions = baseline.imports.flatMap(function (_ref2) {
    var _exclude$calls;

    var exclude = _ref2.exclude;
    return exclude === null || exclude === void 0 ? void 0 : (_exclude$calls = exclude.calls) === null || _exclude$calls === void 0 ? void 0 : _exclude$calls.map(function (x) {
      return x ? x.control_id : "";
    });
  });
  return exclusions || [];
};

exports.profileExclusions = profileExclusions;