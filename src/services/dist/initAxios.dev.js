"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Api.js
// Create a instance of axios to use the same base url.
var axiosAPI = _axios["default"].create({
  baseURL: "http://localhost:3103" // it's not recommended to have this info here.

}); // implement a method to execute all the request from here.


var apiRequest = function apiRequest(method, url, request) {
  var headers, res;
  return regeneratorRuntime.async(function apiRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          headers = {
            authorization: ""
          }; //using the axios instance to perform the request that received from each http method

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(axiosAPI({
            method: method,
            url: url,
            data: request,
            headers: headers
          }));

        case 4:
          res = _context.sent;
          return _context.abrupt("return", Promise.resolve(res.data));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", Promise.reject(_context.t0));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // function to execute the http get request


var get = function get(url, request) {
  return apiRequest("get", url, request);
}; // function to execute the http delete request


var deleteRequest = function deleteRequest(url, request) {
  return apiRequest("delete", url, request);
}; // function to execute the http post request


var post = function post(url, request) {
  return apiRequest("post", url, request);
}; // function to execute the http put request


var put = function put(url, request) {
  return apiRequest("put", url, request);
}; // function to execute the http path request


var patch = function patch(url, request) {
  return apiRequest("patch", url, request);
}; // expose your method to other services or actions


var initAxios = {
  get: get,
  "delete": deleteRequest,
  post: post,
  put: put,
  patch: patch
};
var _default = initAxios;
exports["default"] = _default;