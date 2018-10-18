'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

var endpoint = 'designs';

exports.default = function (Request) {

	var options = {
		uri: '' + endpoint,
		method: 'POST'
	};

	design.get = get;

	return {
		design: design
	};

	function design(colors, font) {

		if (!colors || typeof font !== 'string') throw new Error('Required parameters missing');

		var body = {
			colors: colors,
			font: font
		};

		return Request(Object.assign({}, { body: body }, options));
	}

	function get(id) {

		if (typeof id !== 'string') throw new Error('Id parameters missing or not a string');

		var options = {
			uri: endpoint + '/' + id,
			method: 'GET'
		};

		return Request(options);
	}
};