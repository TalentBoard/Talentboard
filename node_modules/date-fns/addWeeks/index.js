'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addWeeks;

var _index = require('../addDays/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the weeks added
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks(dirtyDate, dirtyAmount, dirtyOptions) {
  var amount = Number(dirtyAmount);
  var days = amount * 7;
  return (0, _index2.default)(dirtyDate, days, dirtyOptions);
}
module.exports = exports['default'];