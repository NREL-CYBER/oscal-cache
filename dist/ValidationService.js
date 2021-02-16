"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _oscal_ssp_schema = _interopRequireDefault(require("oscal/schemas/oscal_ssp_schema.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ValidationService = /*#__PURE__*/function () {
  function ValidationService() {
    _classCallCheck(this, ValidationService);

    _defineProperty(this, "party", void 0);

    _defineProperty(this, "role", void 0);

    _defineProperty(this, "inventory_item", void 0);

    _defineProperty(this, "component", void 0);

    _defineProperty(this, "ssp", void 0);

    _defineProperty(this, "authorization_boundary", void 0);

    _defineProperty(this, "resource", void 0);

    this.ssp = new _validator["default"](_oscal_ssp_schema["default"], "system_security_plan");
    this.party = this.ssp.makeReferenceValidator({
      $ref: "#/party"
    });
    this.role = this.ssp.makeReferenceValidator({
      $ref: "#/role"
    });
    this.inventory_item = this.ssp.makeReferenceValidator({
      $ref: "#/inventory_item"
    });
    this.component = this.ssp.makeReferenceValidator({
      $ref: "#/system_component"
    });
    this.authorization_boundary = this.ssp.makeReferenceValidator({
      $ref: "#/authorization_boundary"
    });
    this.resource = this.ssp.makeReferenceValidator({
      $ref: "#/resource"
    });
  }

  _createClass(ValidationService, null, [{
    key: "validate",
    value: function validate() {
      return this._instance || (this._instance = new this());
    }
  }]);

  return ValidationService;
}();

_defineProperty(ValidationService, "_instance", void 0);

var _default = ValidationService;
exports["default"] = _default;