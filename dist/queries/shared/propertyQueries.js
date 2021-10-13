"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propsHaveValue = exports.componentPropValue = exports.componentHasRelationalLink = exports.propExists = exports.dependentComponents = exports.propValue = exports.componentHasPropValue = exports.componentHasProp = exports.propIndex = exports.addProp = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var componentHasPropValue = function componentHasPropValue(name, value) {
  return function (component) {
    return propsHaveValue(name, value)(component && component.props || []);
  };
};

exports.componentHasPropValue = componentHasPropValue;

var componentHasProp = function componentHasProp(name) {
  return function (component) {
    return propExists(name)(component && component.props || []);
  };
};

exports.componentHasProp = componentHasProp;

var componentHasRelationalLink = function componentHasRelationalLink(rel) {
  return function (component) {
    return linkHasRelations(rel)(component && component.links || []);
  };
};

exports.componentHasRelationalLink = componentHasRelationalLink;

var addProp = function addProp(prop, props) {
  return props ? [].concat(_toConsumableArray(props), [prop]) : [prop];
};

exports.addProp = addProp;

var propsHaveValue = function propsHaveValue(name, value) {
  return function (props) {
    return props ? typeof props.find(function (prop) {
      return prop.name === name && value === prop.value;
    }) !== 'undefined' : false;
  };
};

exports.propsHaveValue = propsHaveValue;

var propValue = function propValue(name) {
  return function (props) {
    var _props$find;

    return props && ((_props$find = props.find(function (prop) {
      return prop.name === name;
    })) === null || _props$find === void 0 ? void 0 : _props$find.value);
  };
};

exports.propValue = propValue;

var propExists = function propExists(name) {
  return function (props) {
    return props ? typeof props.find(function (prop) {
      return prop.name === name;
    }) !== 'undefined' : false;
  };
};

exports.propExists = propExists;

var propIndex = function propIndex(name) {
  return function (props) {
    if (typeof props === "undefined") {
      return false;
    }

    var index = props ? props.findIndex(function (prop) {
      return prop.name === name;
    }) : false;

    if (index === -1) {
      return props.length;
    } else {
      return index;
    }
  };
};

exports.propIndex = propIndex;

var linkHasRelations = function linkHasRelations(rel) {
  return function (links) {
    return links ? typeof links.find(function (link) {
      return link.rel === rel;
    }) !== 'undefined' : false;
  };
};

var linksWithRelationalUuids = function linksWithRelationalUuids(rel) {
  return function (links) {
    return links ? links.filter(function (link) {
      return link.rel === rel;
    }).map(function (x) {
      return x.href.slice(1);
    }) : [];
  };
};

var dependentComponents = function dependentComponents(component) {
  return linksWithRelationalUuids("depends-on")(component.links);
};

exports.dependentComponents = dependentComponents;

var componentPropValue = function componentPropValue(name) {
  return function (component) {
    var _component$props$find;

    return component.props ? (_component$props$find = component.props.find(function (prop) {
      return prop.name === name;
    })) === null || _component$props$find === void 0 ? void 0 : _component$props$find.value : undefined;
  };
};

exports.componentPropValue = componentPropValue;