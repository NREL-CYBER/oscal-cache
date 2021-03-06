"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifyAssessmentSubject = void 0;

var modifyAssessmentSubject = function modifyAssessmentSubject(type, subject_uuid, selection) {
  return function (sapDraft) {
    var _exclude_subjects, _include_subjects;

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
        return ex.subject_uuid !== subject_uuid;
      }) : [];
      include_subjects = include_subjects ? include_subjects.filter(function (x) {
        return x.subject_uuid !== subject_uuid;
      }) : [];
      include_subjects.push({
        subject_uuid: subject_uuid,
        type: type
      });
    }

    if (selection.includes("exclude")) {
      exclude_subjects = exclude_subjects ? exclude_subjects.filter(function (x) {
        return x.subject_uuid !== subject_uuid;
      }) : [];
      include_subjects = include_subjects ? include_subjects.filter(function (x) {
        return x.subject_uuid !== subject_uuid;
      }) : [];
      exclude_subjects.push({
        subject_uuid: subject_uuid,
        type: type
      });
    }

    assessment_subjects[subject_index].exclude_subjects = (((_exclude_subjects = exclude_subjects) === null || _exclude_subjects === void 0 ? void 0 : _exclude_subjects.length) || 0) > 0 ? exclude_subjects : undefined;
    assessment_subjects[subject_index].include_subjects = (((_include_subjects = include_subjects) === null || _include_subjects === void 0 ? void 0 : _include_subjects.length) || 0) > 0 ? include_subjects : undefined;

    if (typeof assessment_subjects[subject_index].include_subjects === "undefined") {
      delete assessment_subjects[subject_index].include_subjects;
    }

    if (typeof assessment_subjects[subject_index].exclude_subjects === "undefined") {
      delete assessment_subjects[subject_index].exclude_subjects;
    }

    sapDraft.assessment_subjects = assessment_subjects;
  };
};

exports.modifyAssessmentSubject = modifyAssessmentSubject;