/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

export default (Request) => {

	const options = {
		uri: 'images',
		method: 'POST'
	};

	image.get = get;

	return {
		image
	};

	function image(url) {

		if (typeof url !== 'string' ) throw new Error('Url parameter missing or not a string');

		let body = {
			url
		};

		return Request(Object.assign({}, { body }, options));
	}

	function get(id) {

		if (typeof id !== 'string' ) throw new Error('Id parameters missing or not a string');

		let options = {
			uri: `images/${id}`,
			method: 'GET'
		};

		return Request(options);
	}
}
