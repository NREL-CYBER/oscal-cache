"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.implementationValid = exports.implementationStatementsCount = exports.implementationHasStatements = void 0;

var _flattenPartTree = require("./flattenPartTree");

var implementationHasStatements = function implementationHasStatements(implementation) {
  return Object.keys(implementation.statements || {}).length > 0;
};

exports.implementationHasStatements = implementationHasStatements;

var implementationStatementsCount = function implementationStatementsCount(implementation) {
  return Object.keys(implementation.statements || {}).length;
};

exports.implementationStatementsCount = implementationStatementsCount;

var implementationValid = function implementationValid(implementation, control) {
  var _control$parts;

  var statementParts = (_control$parts = control.parts) === null || _control$parts === void 0 ? void 0 : _control$parts.filter(function (x) {
    return x.name === "statement";
  });
  var required_parts = statementParts.flatMap(_flattenPartTree.flattenPartLeaves).map(function (x) {
    return x.id;
  });
  var implementation_statement_count = implementationStatementsCount(implementation);
  return required_parts.length === implementation_statement_count;
};

exports.implementationValid = implementationValid;