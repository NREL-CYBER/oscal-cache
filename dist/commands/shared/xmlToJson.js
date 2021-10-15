"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xmlToJson = void 0;

var _fastXmlParser = _interopRequireDefault(require("fast-xml-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var xmlToJson = function xmlToJson(xml, compact, spaces) {
  var options = {
    attributeNamePrefix: "",
    // attrNodeName: "false", //default is 'false'
    // textNodeName : "#text",
    ignoreAttributes: false,
    ignoreNameSpace: true,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: true,
    // trimValues: true,
    cdataTagName: "__cdata",
    //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    numParseOptions: {
      hex: true,
      leadingZeros: true //skipLike: /\+[0-9]{10}/

    },
    arrayMode: false,
    //"strict"
    // attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
    // tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
    // stopNodes: ["parse-me-as-string"],
    alwaysCreateTextNode: false
  };

  var result = _fastXmlParser["default"].parse(xml, options);

  return result;
};

exports.xmlToJson = xmlToJson;