"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterByName = void 0;

var filterByName = function filterByName(query) {
  return function (target) {
    return target.name ? target.name.toLowerCase().includes((query || "").toLowerCase()) : false;
  };
};

exports.filterByName = filterByName;