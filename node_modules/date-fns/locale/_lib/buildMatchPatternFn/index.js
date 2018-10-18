"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchPatternFn;
/**
 * @name buildMatchPatternFn
 * @category Locale Helpers
 * @summary Build match function from a single RegExp.
 *
 * @description
 * Build match function from a single RegExp.
 * Usually used for building `match.ordinalNumbers` property of the locale.
 *
 * @param {Object} pattern - the RegExp
 * @returns {Function} the resulting function
 *
 * @example
 * locale.match.ordinalNumbers = buildMatchPatternFn(/^(\d+)(th|st|nd|rd)?/i)
 * locale.match.ordinalNumbers('3rd') //=> ['3rd', '3', 'rd', ...]
 */
function buildMatchPatternFn(pattern) {
  return function (dirtyString) {
    var string = String(dirtyString);
    return string.match(pattern);
  };
}
module.exports = exports["default"];