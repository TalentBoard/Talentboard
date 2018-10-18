'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildFormatLongFn/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatLong = (0, _index2.default)({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'YYYY-MM-DD',
  LL: 'D[-a de] MMMM YYYY',
  LLL: 'D[-a de] MMMM YYYY, HH:mm',
  LLLL: 'dddd, [la] D[-a de] MMMM YYYY, HH:mm'
});

exports.default = formatLong;
module.exports = exports['default'];