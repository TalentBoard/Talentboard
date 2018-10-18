'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildLocalizeFn/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../../_lib/buildLocalizeArrayFn/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var weekdayValues = {
  narrow: ['di', 'lu', 'ma', 'me', 'ĵa', 've', 'sa'],
  short: ['dim', 'lun', 'mar', 'mer', 'ĵaŭ', 'ven', 'sab'],
  long: ['dimanĉo', 'lundo', 'mardo', 'merkredo', 'ĵaŭdo', 'vendredo', 'sabato']
};

var monthValues = {
  short: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aŭg', 'sep', 'okt', 'nov', 'dec'],
  long: ['januaro', 'februaro', 'marto', 'aprilo', 'majo', 'junio', 'julio', 'aŭgusto', 'septembro', 'oktobro', 'novembro', 'decembro']
};

var timeOfDayValues = {
  uppercase: ['A.T.M.', 'P.T.M.'],
  lowercase: ['a.t.m.', 'p.t.m.'],
  long: ['antaŭtagmeze', 'posttagmeze']
};

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  return number + '-a';
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: (0, _index2.default)(weekdayValues, 'long'),
  weekdays: (0, _index4.default)(weekdayValues, 'long'),
  month: (0, _index2.default)(monthValues, 'long'),
  months: (0, _index4.default)(monthValues, 'long'),
  timeOfDay: (0, _index2.default)(timeOfDayValues, 'long', function (hours) {
    return hours / 12 >= 1 ? 1 : 0;
  }),
  timesOfDay: (0, _index4.default)(timeOfDayValues, 'long')
};

exports.default = localize;
module.exports = exports['default'];