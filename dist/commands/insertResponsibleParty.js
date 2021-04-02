"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertResponsibleParty = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;

var insertResponsibleParty = function insertResponsibleParty(role_id, new_responsible_party) {
  return function (target) {
    if (target.metadata.responsible_parties) {
      var responsible_party = target.metadata.responsible_parties[role_id];

      if (responsible_party) {
        while (responsible_party.party_uuids.length) {
          responsible_party.party_uuids.pop();
        }

        new_responsible_party.party_uuids.forEach(function (party_uuid) {
          responsible_party.party_uuids.push(party_uuid);
        });
      } else {
        target.metadata.responsible_parties[role_id] = new_responsible_party;
      }
    } else {
      target.metadata.responsible_parties = _defineProperty({}, role_id, new_responsible_party);
    }
  };
};

exports.insertResponsibleParty = insertResponsibleParty;