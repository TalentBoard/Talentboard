'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addISOYears;

var _index = require('../getISOYear/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../setISOYear/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addISOYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the ISO week-numbering years added
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * var result = addISOYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */
function addISOYears(dirtyDate, dirtyAmount, dirtyOptions) {
  var amount = Number(dirtyAmount);
  return (0, _index4.default)(dirtyDate, (0, _index2.default)(dirtyDate, dirtyOptions) + amount, dirtyOptions);
}
module.exports = exports['default'];