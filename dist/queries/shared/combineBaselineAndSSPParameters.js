"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineBaslineAndSSPParameters = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var combineBaslineAndSSPParameters = function combineBaslineAndSSPParameters() {
  var _baseline$modify, _baseline$modify$set_, _ssp$control_implemen;

  var baseline = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ssp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return [].concat(_toConsumableArray((baseline === null || baseline === void 0 ? void 0 : (_baseline$modify = baseline.modify) === null || _baseline$modify === void 0 ? void 0 : (_baseline$modify$set_ = _baseline$modify.set_parameters) === null || _baseline$modify$set_ === void 0 ? void 0 : _baseline$modify$set_.map(function (_ref) {
    var values = _ref.values,
        param_id = _ref.param_id;
    return {
      param_id: param_id,
      values: values || []
    };
  })) || []), _toConsumableArray((ssp === null || ssp === void 0 ? void 0 : (_ssp$control_implemen = ssp.control_implementation) === null || _ssp$control_implemen === void 0 ? void 0 : _ssp$control_implemen.set_parameters) || []));
};

exports.combineBaslineAndSSPParameters = combineBaslineAndSSPParameters;