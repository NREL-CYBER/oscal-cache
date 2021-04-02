"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.implementationStatements = exports.isPartialyImplementation = void 0;

var isPartialyImplementation = function isPartialyImplementation(implementation) {
  return Object.keys(implementation.statements || {}).length > 0;
};

exports.isPartialyImplementation = isPartialyImplementation;

var implementationStatements = function implementationStatements(implementation) {
  return Object.keys(implementation.statements || {}).length;
};

exports.implementationStatements = implementationStatements;