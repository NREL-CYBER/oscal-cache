"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifyAssessmentSubject = void 0;

var modifyAssessmentSubject = function modifyAssessmentSubject(type, uuid, selection) {
  return function (sapDraft) {
    var assessment_subjects = sapDraft.assessment_subjects || [];
    var subject_index = assessment_subjects === null || assessment_subjects === void 0 ? void 0 : assessment_subjects.findIndex(function (x) {
      return x.type === type;
    });

    if (subject_index === -1) {
      assessment_subjects.push({
        type: type
      });
    }

    subject_index = assessment_subjects.findIndex(function (x) {
      return x.type === type;
    });
    var subject = assessment_subjects.find(function (x) {
      return x.type === type;
    });
    var _ref = subject,
        exclude_subjects = _ref.exclude_subjects,
        include_subjects = _ref.include_subjects;

    if (selection.includes("include")) {
      exclude_subjects = exclude_subjects ? exclude_subjects.filter(function (ex) {
        return ex.uuid_ref !== uuid;
      }) : [];
      include_subjects = include_subjects ? include_subjects.filter(function (x) {
        return x.uuid_ref !== uuid;
      }) : [];
      include_subjects.push({
        uuid_ref: uuid
      });
    }

    if (selection.includes("exclude")) {
      exclude_subjects = exclude_subjects ? exclude_subjects.filter(function (x) {
        return x.uuid_ref !== uuid;
      }) : [];
      include_subjects = include_subjects ? include_subjects.filter(function (x) {
        return x.uuid_ref !== uuid;
      }) : [];
      exclude_subjects.push({
        uuid_ref: uuid
      });
    }

    assessment_subjects[subject_index].exclude_subjects = exclude_subjects;
    assessment_subjects[subject_index].include_subjects = include_subjects;
    sapDraft.assessment_subjects = assessment_subjects;
  };
};

exports.modifyAssessmentSubject = modifyAssessmentSubject;