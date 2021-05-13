"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controlObjectiveParts = void 0;

/**
 * Calculate the amount of objectives in a control
 * @param control 
 */
var controlObjectiveParts = function controlObjectiveParts(control) {
  if (!control.parts || control.parts.length === 0) {
    return 0;
  }

  var gatherParts = function gatherParts(parts) {
    return parts && parts.map(function (x) {
      return x.parts ? gatherParts(x.parts) : 1;
    }).reduce(function (a, b) {
      return a + b;
    });
  };

  var mainObjectives = control.parts && control.parts.filter(function (x) {
    return x.name === 'objective';
  });
  return mainObjectives ? mainObjectives.map(function (objective) {
    return objective.parts ? gatherParts(objective.parts) : 1;
  }).reduce(function (a, b) {
    return a + b;
  }) : 1;
};

exports.controlObjectiveParts = controlObjectiveParts;