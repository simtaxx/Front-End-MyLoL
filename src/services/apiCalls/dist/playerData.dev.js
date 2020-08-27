"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayerData = void 0;

var _initAxios = _interopRequireDefault(require("../initAxios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Implementations for all the calls for the pokemon endpoints.
// Method to get a list of all Pokemon
var getPlayerData = function getPlayerData() {
  var response;
  return regeneratorRuntime.async(function getPlayerData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_initAxios["default"].get("/player?username=je flex"));

        case 3:
          response = _context.sent;
          console.log(response);
          return _context.abrupt("return", response);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getPlayerData = getPlayerData;