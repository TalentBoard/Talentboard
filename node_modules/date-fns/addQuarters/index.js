'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addQuarters;

var _index = require('../addMonths/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the quarters added
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * var result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
function addQuarters(dirtyDate, dirtyAmount, dirtyOptions) {
  var amount = Number(dirtyAmount);
  var months = amount * 3;
  return (0, _index2.default)(dirtyDate, months, dirtyOptions);
}
module.exports = exports['default'];