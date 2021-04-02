"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var responsiblePartiesForRole = function responsiblePartiesForRole(origin, role_id) {
  return typeof origin !== "undefined" && typeof origin.metadata !== "undefined" && origin.metadata.responsible_parties && origin.metadata.responsible_parties[role_id] ? origin.metadata.responsible_parties[role_id].party_uuids : [];
};

var _default = responsiblePartiesForRole;
exports["default"] = _default;