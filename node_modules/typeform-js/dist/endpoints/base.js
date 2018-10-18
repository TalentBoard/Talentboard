'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

exports.default = function (Request) {

	var options = {
		method: 'GET'
	};

	return {
		base: base
	};

	function base() {

		return Request(options);
	}
};