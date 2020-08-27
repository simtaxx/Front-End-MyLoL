"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _App = _interopRequireDefault(require("./App.svelte"));

require("./styles/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new _App["default"]({
  target: document.body
});
var _default = app;
exports["default"] = _default;