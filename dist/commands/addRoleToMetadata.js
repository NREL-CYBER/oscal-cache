"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRoleToMetadata = void 0;

var addRoleToMetadata = function addRoleToMetadata(role) {
  return function (authPackage) {
    var _authPackage$metadata;

    if ((_authPackage$metadata = authPackage.metadata.roles) !== null && _authPackage$metadata !== void 0 && _authPackage$metadata.map(function (_ref) {
      var id = _ref.id;
      return id;
    }).includes(role.id)) {
      return;
    }

    authPackage.metadata.roles ? authPackage.metadata.roles.push(role) : authPackage.metadata.roles = [role];
  };
};

exports.addRoleToMetadata = addRoleToMetadata;