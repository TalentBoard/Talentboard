'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

exports.default = function (Request) {

	var options = {
		uri: 'images',
		method: 'POST'
	};

	image.get = get;

	return {
		image: image
	};

	function image(url) {

		if (typeof url !== 'string') throw new Error('Url parameter missing or not a string');

		var body = {
			url: url
		};

		return Request(Object.assign({}, { body: body }, options));
	}

	function get(id) {

		if (typeof id !== 'string') throw new Error('Id parameters missing or not a string');

		var options = {
			uri: 'images/' + id,
			method: 'GET'
		};

		return Request(options);
	}
};