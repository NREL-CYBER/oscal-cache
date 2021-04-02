"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenControlTree = void 0;

var flattenControlTree = function flattenControlTree(controls) {
  return controls.flatMap(function (control) {
    return control.controls ? flattenControlTree(control.controls) : control;
  });
};

exports.flattenControlTree = flattenControlTree;