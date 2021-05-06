"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isImplementationValid = exports.implementationStatementsCount = exports.implementationHasStatements = void 0;

var _flattenPartTree = require("./flattenPartTree");

var _propertyQueries = require("./propertyQueries");

var implementationHasStatements = function implementationHasStatements(implementation) {
  return Object.keys(implementation.statements || {}).length > 0;
};

exports.implementationHasStatements = implementationHasStatements;

var implementationStatementsCount = function implementationStatementsCount(implementation) {
  return Object.keys(implementation.statements || {}).length;
};

exports.implementationStatementsCount = implementationStatementsCount;

var isImplementationValid = function isImplementationValid(implementation, control) {
  if (typeof implementation === "undefined" || typeof control === "undefined" || typeof control.parts === "undefined") {
    return false;
  }

  var statementParts = control.parts.filter(function (x) {
    return x.name === "statement";
  });
  var required_parts = statementParts.flatMap(function (part) {
    return part && (0, _flattenPartTree.flattenPartLeaves)(part);
  }).map(function (x) {
    return (0, _propertyQueries.propValue)("status")(x.props) !== "withdrawn" && typeof x.parts === "undefined" ? x.id : undefined;
  }).filter(function (x) {
    return typeof x !== "undefined";
  });
  var implementation_statement_count = implementationStatementsCount(implementation);
  return required_parts.length === implementation_statement_count;
};

exports.isImplementationValid = isImplementationValid;