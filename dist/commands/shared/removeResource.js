"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeResource = void 0;

var removeResource = function removeResource(resource) {
  return function (oscal_document) {
    var _oscal_document$back_, _oscal_document$back_2, _oscal_document$back_3;

    var resources = ((_oscal_document$back_ = oscal_document.back_matter) === null || _oscal_document$back_ === void 0 ? void 0 : (_oscal_document$back_2 = _oscal_document$back_.resources) === null || _oscal_document$back_2 === void 0 ? void 0 : _oscal_document$back_2.filter(function (x) {
      return x.uuid !== resource.uuid;
    })) || [];

    if (oscal_document.back_matter) {
      oscal_document.back_matter.resources = resources;
    } else {
      oscal_document.back_matter = {
        resources: resources
      };
    }

    if (((_oscal_document$back_3 = oscal_document.back_matter.resources) === null || _oscal_document$back_3 === void 0 ? void 0 : _oscal_document$back_3.length) === 0) {
      oscal_document.back_matter = undefined;
    }
  };
};

exports.removeResource = removeResource;