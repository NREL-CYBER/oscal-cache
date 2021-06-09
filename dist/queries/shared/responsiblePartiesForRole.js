"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responsiblePartiesForRole = void 0;

var responsiblePartiesForRole = function responsiblePartiesForRole(origin, role_id) {
  var _origin$metadata$resp;

  return typeof origin !== "undefined" && typeof origin.metadata !== "undefined" && origin.metadata.responsible_parties && ((_origin$metadata$resp = origin.metadata.responsible_parties.find(function (x) {
    return x.role_id === role_id;
  })) === null || _origin$metadata$resp === void 0 ? void 0 : _origin$metadata$resp.party_uuids);
};

exports.responsiblePartiesForRole = responsiblePartiesForRole;