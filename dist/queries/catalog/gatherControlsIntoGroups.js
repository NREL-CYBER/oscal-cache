"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gatherControlsIntoGroups = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Calculate the amount of objectives in a control
 * @param groups 
 * @param control 
 */
var gatherControlsIntoGroups = function gatherControlsIntoGroups(groups, controls) {
  var control_ids = controls.map(function (x) {
    return x.id;
  });
  var matching_groups = groups.map(function (group) {
    var matching_controls = group.controls.filter(function (control) {
      return control_ids.includes(control.id);
    }) || [];
    var controls = matching_controls.sort(function (x, y) {
      return Number(x.id.replace(group.id + "-", "")) - Number(y.id.replace(group.id + "-", ""));
    });
    return _objectSpread(_objectSpread({}, group), {}, {
      controls: controls
    });
  });
  return matching_groups.filter(function (group) {
    return group.controls && group.controls.length !== 0;
  });
};

exports.gatherControlsIntoGroups = gatherControlsIntoGroups;