'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addUTCMinutes;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function addUTCMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var amount = Number(dirtyAmount);
  date.setUTCMinutes(date.getUTCMinutes() + amount);
  return date;
}
module.exports = exports['default'];