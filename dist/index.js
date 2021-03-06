"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  OscalCachedDefinition: true,
  useActiveControlGroups: true,
  useActiveControls: true,
  useSSPInventoryitems: true,
  useImplementations: true
};
Object.defineProperty(exports, "OscalCachedDefinition", {
  enumerable: true,
  get: function get() {
    return _oscalCache.OscalCachedDefinition;
  }
});
Object.defineProperty(exports, "useActiveControlGroups", {
  enumerable: true,
  get: function get() {
    return _oscalCache.useActiveControlGroups;
  }
});
Object.defineProperty(exports, "useActiveControls", {
  enumerable: true,
  get: function get() {
    return _oscalCache.useActiveControls;
  }
});
Object.defineProperty(exports, "useSSPInventoryitems", {
  enumerable: true,
  get: function get() {
    return _oscalCache.useSSPInventoryitems;
  }
});
Object.defineProperty(exports, "useImplementations", {
  enumerable: true,
  get: function get() {
    return _oscalCache.useImplementations;
  }
});
exports["default"] = void 0;

var _oscalCache = _interopRequireWildcard(require("./oscal-cache"));

var _commands = require("./commands/");

Object.keys(_commands).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _commands[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _commands[key];
    }
  });
});

var _queries = require("./queries/");

Object.keys(_queries).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _queries[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _queries[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _oscalCache["default"];
exports["default"] = _default;