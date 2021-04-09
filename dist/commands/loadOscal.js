"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load_oscal = void 0;

var _oscal = require("oscal");

var _NIST_SP80053_rev5_HIGHBaseline_profile = _interopRequireDefault(require("oscal/content/baseline-profile/NIST_SP-800-53_rev5_HIGH-baseline_profile.json"));

var _NIST_SP80053_rev5_LOWBaseline_profile = _interopRequireDefault(require("oscal/content/baseline-profile/NIST_SP-800-53_rev5_LOW-baseline_profile.json"));

var _NIST_SP80053_rev5_MODERATEBaseline_profile = _interopRequireDefault(require("oscal/content/baseline-profile/NIST_SP-800-53_rev5_MODERATE-baseline_profile.json"));

var _NIST_SP80053_rev5_PRIVACYBaseline_profile = _interopRequireDefault(require("oscal/content/baseline-profile/NIST_SP-800-53_rev5_PRIVACY-baseline_profile.json"));

var _NIST_SP80053_rev5_catalog = _interopRequireDefault(require("oscal/content/catalog/NIST_SP-800-53_rev5_catalog.json"));

var _fedrampInfoTypes = _interopRequireDefault(require("oscal/content/information-type/fedramp-info-types.json"));

var _defaultRoles = _interopRequireDefault(require("oscal/content/role/default-roles.json"));

var _uuid = require("uuid");

var _flattenControlTree = require("../queries/flattenControlTree");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var load_oscal = function load_oscal() {
  var nist_catalog = (0, _oscal.importOscal)(_NIST_SP80053_rev5_catalog["default"]["catalog"]);

  var catalog = _defineProperty({}, nist_catalog.uuid, nist_catalog);

  var role = _defaultRoles["default"].filter(function (x) {
    return !x.id.includes("isa");
  }).reduce(function (roles, role) {
    return _objectSpread(_objectSpread({}, roles), {}, _defineProperty({}, role.id, (0, _oscal.importOscal)(role)));
  }, {});

  var information_type = _fedrampInfoTypes["default"]["information-types"].reduce(function (info_types, oscal_1_info_type) {
    //        delete oscal_1_info_type["information-type-ids"];
    var uuid = (0, _uuid.v4)();

    var info_type_old = _objectSpread(_objectSpread({}, (0, _oscal.importOscal)(oscal_1_info_type)), {}, {
      uuid: uuid
    });

    var information_type_ids = Object.values(oscal_1_info_type["information-type-ids"]).map(function (_ref) {
      var id = _ref.id;
      return id;
    });
    var system = Object.keys(oscal_1_info_type["information-type-ids"]).join();

    var info_type_new = _objectSpread(_objectSpread({}, info_type_old), {}, {
      props: info_type_old["properties"].map(function (prop) {
        return _objectSpread(_objectSpread({}, prop), {}, {
          "ns": "https://nrel.oscal.gov/"
        });
      }),
      categorizations: [{
        system: system,
        information_type_ids: information_type_ids
      }]
    });

    delete info_type_new["information_type_ids"];
    delete info_type_new["properties"];
    return _objectSpread(_objectSpread({}, info_types), {}, _defineProperty({}, uuid, info_type_new));
  }, {});

  var baseline_profile = [_NIST_SP80053_rev5_HIGHBaseline_profile["default"], _NIST_SP80053_rev5_MODERATEBaseline_profile["default"], _NIST_SP80053_rev5_LOWBaseline_profile["default"], _NIST_SP80053_rev5_PRIVACYBaseline_profile["default"]].map(function (baseline) {
    return baseline["profile"];
  }).reduce(function (profiles, profile) {
    var importedProfile = (0, _oscal.importOscal)(profile);
    return _objectSpread(_objectSpread({}, profiles), {}, _defineProperty({}, importedProfile.uuid, importedProfile));
  }, {});
  var control = (0, _flattenControlTree.flattenControlTree)(nist_catalog.groups).map(function (c) {
    return _defineProperty({}, c.id, c);
  }).reduce(function (a, b) {
    return _objectSpread(_objectSpread({}, a), b);
  });
  ;
  var control_group = nist_catalog.groups.map(function (group) {
    return _defineProperty({}, group.id, _objectSpread({}, group));
  }).reduce(function () {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _objectSpread(_objectSpread({}, a), b);
  });
  return {
    catalog: catalog,
    baseline_profile: baseline_profile,
    information_type: information_type,
    role: role,
    control: control,
    control_group: control_group
  };
};

exports.load_oscal = load_oscal;