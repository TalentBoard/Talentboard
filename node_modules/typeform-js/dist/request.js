'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (token) {

	if (!token) throw new Error('Token must be set');

	return function () {
		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];


		var opts = Object.assign({}, options, {
			json: true,
			headers: { 'X-API-TOKEN': token }
		});

		opts.uri = setUri(options.uri);

		return new Promise(function (resolve, reject) {
			(0, _clientRequest2.default)(opts, function callback(err, response, body) {

				var isSuccessful = response.statusCode > 199 && response.statusCode < 300;

				if (!isSuccessful) {

					reject(composeError(response, body));

					return;
				}

				resolve(body);
			});
		});
	};
};

var _clientRequest = require('client-request');

var _clientRequest2 = _interopRequireDefault(_clientRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = 'https://api.typeform.io/latest/'; /**
                                              * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
                                              */


function setUri() {
	var endPoint = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	return '' + api + endPoint;
}

function composeError(response, body) {

	var error = {
		code: response.statusCode,
		message: response.statusMessage
	};

	if (body && body.description) {
		error.description = body.description;
	}

	return error;
}