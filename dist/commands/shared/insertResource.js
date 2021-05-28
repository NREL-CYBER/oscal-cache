"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertResource = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var insertResource = function insertResource(resource) {
  return function (oscal_document) {
    var _oscal_document$back_, _oscal_document$back_2;

    var other_resources = ((_oscal_document$back_ = oscal_document.back_matter) === null || _oscal_document$back_ === void 0 ? void 0 : (_oscal_document$back_2 = _oscal_document$back_.resources) === null || _oscal_document$back_2 === void 0 ? void 0 : _oscal_document$back_2.filter(function (x) {
      return x.uuid !== resource.uuid;
    })) || [];
    var resources = [resource].concat(_toConsumableArray(other_resources));

    if (oscal_document.back_matter) {
      oscal_document.back_matter.resources = resources;
    } else {
      oscal_document.back_matter = {
        resources: resources
      };
    }
  };
};

exports.insertResource = insertResource;