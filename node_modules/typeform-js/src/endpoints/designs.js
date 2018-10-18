/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

const endpoint = 'designs';

export default (Request) => {

	const options = {
		uri: `${endpoint}`,
		method: 'POST'
	};

	design.get = get;

	return {
		design
	};

	function design(colors, font) {

		if (!colors || typeof font !== 'string') throw new Error('Required parameters missing');

		let body = {
			colors,
			font
		};

		return Request(Object.assign({}, { body }, options));
	}

	function get(id) {

		if (typeof id !== 'string' ) throw new Error('Id parameters missing or not a string');

		let options = {
			uri: `${endpoint}/${id}`,
			method: 'GET'
		};

		return Request(options);
	}
}
