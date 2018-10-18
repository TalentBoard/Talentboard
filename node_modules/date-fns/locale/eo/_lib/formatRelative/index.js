'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: '[pasinta] dddd [je] LT',
  yesterday: '[hieraŭ je] LT',
  today: '[hodiaŭ je] LT',
  tomorrow: '[morgaŭ je] LT',
  nextWeek: 'dddd [je] LT',
  other: 'L'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports['default'];