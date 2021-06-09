"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertResponsibleParty = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

;

var insertResponsibleParty = function insertResponsibleParty(new_responsible_party) {
  return function (target) {
    var _target$metadata$resp;

    var role_id = new_responsible_party.role_id;
    var other_responsible_parties = ((_target$metadata$resp = target.metadata.responsible_parties) === null || _target$metadata$resp === void 0 ? void 0 : _target$metadata$resp.filter(function (x) {
      return x.role_id !== role_id;
    })) || [];
    var responsible_parties = [].concat(_toConsumableArray(other_responsible_parties), [new_responsible_party]) || [new_responsible_party];
    target.metadata.responsible_parties = responsible_parties;
  };
};

exports.insertResponsibleParty = insertResponsibleParty;