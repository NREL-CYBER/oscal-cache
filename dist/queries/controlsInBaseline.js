"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileExclusions = exports.profileInclusions = exports.profileAlterations = exports.profileModifications = void 0;

/**
 * Get Control ID's of all included or altered in baseline
 * @param baseline
 */
var profileModifications = function profileModifications(import_href, baseline) {
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

var profileInclusions = function profileInclusions(import_href, baseline) {
  var _profile_import$inclu, _profile_import$inclu2;

  var profile_import = baseline.imports.find(function (x) {
    return x.href === import_href;
  });
  var inclusions = profile_import === null || profile_import === void 0 ? void 0 : (_profile_import$inclu = profile_import.include) === null || _profile_import$inclu === void 0 ? void 0 : (_profile_import$inclu2 = _profile_import$inclu.calls) === null || _profile_import$inclu2 === void 0 ? void 0 : _profile_import$inclu2.map(function (x) {
    return x ? x.control_id : "";
  });
  return inclusions || [];
};

exports.profileInclusions = profileInclusions;

var profileExclusions = function profileExclusions(import_href, baseline) {
  var _profile_import$exclu, _profile_import$exclu2;

  var profile_import = baseline.imports.find(function (x) {
    return x.href === import_href;
  });
  var exclusions = profile_import === null || profile_import === void 0 ? void 0 : (_profile_import$exclu = profile_import.exclude) === null || _profile_import$exclu === void 0 ? void 0 : (_profile_import$exclu2 = _profile_import$exclu.calls) === null || _profile_import$exclu2 === void 0 ? void 0 : _profile_import$exclu2.map(function (x) {
    return x ? x.control_id : "";
  });
  return exclusions || [];
};

exports.profileExclusions = profileExclusions;