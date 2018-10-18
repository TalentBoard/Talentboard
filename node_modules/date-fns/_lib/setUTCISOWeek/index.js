'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCISOWeek;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../getUTCISOWeek/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek(dirtyDate, dirtyISOWeek, dirtyOptions) {
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var isoWeek = Number(dirtyISOWeek);
  var diff = (0, _index4.default)(date, dirtyOptions) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
module.exports = exports['default'];