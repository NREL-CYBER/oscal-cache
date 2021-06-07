"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRoleToMetadata = void 0;

var addRoleToMetadata = function addRoleToMetadata(role) {
  return function (authPackage) {
    var roles = authPackage.metadata.roles || [];

    if (roles.map(function (_ref) {
      var id = _ref.id;
      return id;
    }).includes(role.id)) {
      return;
    }

    roles.push(role);
    authPackage.metadata.roles = roles;
  };
};

exports.addRoleToMetadata = addRoleToMetadata;