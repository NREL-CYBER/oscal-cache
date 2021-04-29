"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenPartLeaves = void 0;

/**
 * Flatten all sub parts for easy iteration
 * @param root Root Part
 */
var flattenPartLeaves = function flattenPartLeaves(part) {
  return typeof part.parts !== "undefined" ? part.parts.flatMap(function (p) {
    return flattenPartLeaves(p);
  }) : [part];
};

exports.flattenPartLeaves = flattenPartLeaves;