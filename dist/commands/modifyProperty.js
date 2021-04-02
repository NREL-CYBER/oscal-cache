"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifyProperty = void 0;

var _propertyQueries = require("../queries/propertyQueries");

var modifyProperty = function modifyProperty(name, value) {
  return function (props) {
    var index = (0, _propertyQueries.propIndex)(name)(props);
    var modified_prop = {
      name: name,
      value: value,
      ns: "https://nrel.gov/oscal"
    };

    if (typeof index === "boolean" && index === false) {
      props = [modified_prop];
    } else if (typeof index === 'number') {
      props[index] = modified_prop;
    } else {
      props.push(modified_prop);
    }
  };
};

exports.modifyProperty = modifyProperty;