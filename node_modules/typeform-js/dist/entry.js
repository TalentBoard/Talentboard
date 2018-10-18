'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _forms = require('./endpoints/forms');

var _forms2 = _interopRequireDefault(_forms);

var _base = require('./endpoints/base');

var _base2 = _interopRequireDefault(_base);

var _images = require('./endpoints/images');

var _images2 = _interopRequireDefault(_images);

var _designs = require('./endpoints/designs');

var _designs2 = _interopRequireDefault(_designs);

var _urls = require('./endpoints/urls');

var _urls2 = _interopRequireDefault(_urls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

exports.default = function (sessionToken) {

	var request = (0, _request2.default)(sessionToken);

	return Object.assign({}, (0, _base2.default)(request), (0, _forms2.default)(request), (0, _images2.default)(request), (0, _designs2.default)(request), (0, _urls2.default)(request));
};