"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addRoleToMetadata = require("./shared/addRoleToMetadata");

Object.keys(_addRoleToMetadata).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addRoleToMetadata[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _addRoleToMetadata[key];
    }
  });
});

var _excludeControl = require("./baseline/excludeControl");

Object.keys(_excludeControl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _excludeControl[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _excludeControl[key];
    }
  });
});

var _includeControl = require("./baseline/includeControl");

Object.keys(_includeControl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _includeControl[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _includeControl[key];
    }
  });
});

var _insertResponsibleParty = require("./shared/insertResponsibleParty");

Object.keys(_insertResponsibleParty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _insertResponsibleParty[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _insertResponsibleParty[key];
    }
  });
});

var _loadOscal = require("./shared/loadOscal");

Object.keys(_loadOscal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _loadOscal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _loadOscal[key];
    }
  });
});

var _modifyAssessmentSubject = require("./sap/modifyAssessmentSubject");

Object.keys(_modifyAssessmentSubject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _modifyAssessmentSubject[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modifyAssessmentSubject[key];
    }
  });
});

var _modifyControl = require("./baseline/modifyControl");

Object.keys(_modifyControl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _modifyControl[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modifyControl[key];
    }
  });
});

var _modifyProperty = require("./shared/modifyProperty");

Object.keys(_modifyProperty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _modifyProperty[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modifyProperty[key];
    }
  });
});

var _setBaselineParameter = require("./baseline/setBaselineParameter");

Object.keys(_setBaselineParameter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setBaselineParameter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _setBaselineParameter[key];
    }
  });
});

var _insertResource = require("./shared/insertResource");

Object.keys(_insertResource).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _insertResource[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _insertResource[key];
    }
  });
});

var _removeResource = require("./shared/removeResource");

Object.keys(_removeResource).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _removeResource[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _removeResource[key];
    }
  });
});