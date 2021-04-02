"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var textToSpeech = function textToSpeech(text, onStart, onStop) {
  var speech_message = new SpeechSynthesisUtterance();
  speech_message.text = text;
  var voices = speechSynthesis.getVoices().filter(function (x) {
    return x.name.includes("Zira");
  });
  speech_message.voice = voices[0];
  speech_message.addEventListener("end", function () {
    onStop();
  });
  speech_message.addEventListener("pause", function () {
    onStop();
  });
  speech_message.addEventListener("start", function () {
    onStart();
  });
  speech_message.addEventListener("resume", function () {
    onStart();
  });
  setTimeout(function () {
    speechSynthesis.speak(speech_message);
  }, 500);
};

var _default = textToSpeech;
exports["default"] = _default;