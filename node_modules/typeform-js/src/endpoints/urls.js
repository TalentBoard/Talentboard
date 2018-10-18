/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

const ENDPOINT = 'urls';
const ERROR_MESSAGE = 'Id parameters missing or not a string';

export default (Request) => {

	const options = {
		uri: `${ENDPOINT}`,
		method: 'POST'
	};

	url.get = get;
	url.set = set;

	return {
		url
	};

	function url(form_id) {

		if (typeof form_id !== 'string') throw new Error(ERROR_MESSAGE);

		let body = {
			form_id
		};

		return Request(Object.assign({}, { body }, options));
	}

	function get(id) {

		if (typeof id !== 'string' ) throw new Error(ERROR_MESSAGE);

		let options = {
			uri: `${ENDPOINT}/${id}`,
			method: 'GET'
		};

		return Request(options);
	}

	function set(old_id, new_id) {

		if ( typeof old_id !== 'string' || typeof new_id !== 'string' ) throw new Error('Old_id or new_id parameters missing or not sting');

		let options = {
			uri: `${ENDPOINT}/${old_id}`,
			method: 'POST'
		};

		let body = {
			form_id: new_id
		};

		return Request(Object.assign({}, { body }, options));
	}
}
