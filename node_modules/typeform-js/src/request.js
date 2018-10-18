/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import request from "client-request";
const api ='https://api.typeform.io/latest/';

export default function(token) {

	if (!token) throw new Error('Token must be set');

	return  function(options = {}) {

		let opts = Object.assign({}, options, {
			json: true,
			headers: {'X-API-TOKEN': token}
		});

		opts.uri = setUri(options.uri);

		return new Promise(function (resolve, reject) {
			request(opts, function callback(err, response, body) {

				let isSuccessful = response.statusCode > 199 && response.statusCode < 300;

				if (!isSuccessful) {

					reject(composeError(response, body));

					return;
				}

				resolve(body);
			})
		});

	}
}

function setUri(endPoint = '') {
	return `${api}${endPoint}`;
}

function composeError(response, body) {

	let error = {
		code: response.statusCode,
		message: response.statusMessage
	};

	if (body && body.description) {
		error.description = body.description;
	}

	return error;
}