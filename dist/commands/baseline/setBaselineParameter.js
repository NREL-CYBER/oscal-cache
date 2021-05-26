"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBaselineParameter = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setBaselineParameter = function setBaselineParameter(param_id, values) {
  return function (baseline) {
    var modify = baseline.modify || {};
    var set_parameters = modify.set_parameters || {};
    var parameter_setting = set_parameters[param_id] || {};
    parameter_setting.values = values.join("").length === 0 ? undefined : values;
    baseline.modify = _objectSpread(_objectSpread({}, modify), {}, {
      set_parameters: _objectSpread(_objectSpread({}, set_parameters), {}, _defineProperty({}, param_id, parameter_setting))
    });
  };
};

exports.setBaselineParameter = setBaselineParameter;