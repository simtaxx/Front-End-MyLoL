"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var axiosAPI = _axios["default"].create({
  baseURL: "http://localhost:3103"
});

var apiRequest = function apiRequest(method, url, request) {
  var res;
  return regeneratorRuntime.async(function apiRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axiosAPI({
            method: method,
            url: url,
            data: request
            /* ,
            headers */

          }));

        case 3:
          res = _context.sent;
          return _context.abrupt("return", Promise.resolve(res.data));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", Promise.reject(_context.t0));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var get = function get(url, request) {
  return apiRequest("get", url, request);
};

var initAxios = {
  get: get
};
var _default = initAxios;
exports["default"] = _default;