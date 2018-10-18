'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setISOWeek;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../getISOWeek/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the ISO week setted
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(dirtyDate, dirtyISOWeek, dirtyOptions) {
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var isoWeek = Number(dirtyISOWeek);
  var diff = (0, _index4.default)(date, dirtyOptions) - isoWeek;
  date.setDate(date.getDate() - diff * 7);
  return date;
}
module.exports = exports['default'];