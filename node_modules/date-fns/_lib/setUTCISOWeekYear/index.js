'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCISOWeekYear;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../startOfUTCISOWeekYear/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_DAY = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeekYear(dirtyDate, dirtyISOYear, dirtyOptions) {
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var isoYear = Number(dirtyISOYear);
  var dateStartOfYear = (0, _index4.default)(date, dirtyOptions);
  var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(isoYear, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  date = (0, _index4.default)(fourthOfJanuary, dirtyOptions);
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
module.exports = exports['default'];