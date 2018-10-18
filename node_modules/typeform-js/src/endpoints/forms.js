/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

import Request from '../request';

export default (Request) => {

	const options = {
		uri: 'forms',
		method: 'POST'
	};

	form.get = get;

	return {
		form
	};

	function form(title, fields, extra = {}) {

		if (typeof title !== 'string' || !fields) throw new Error('Required parameters missing');

		let body = {
			title,
			fields
		};

		Object.assign(body, extra);

		return Request(Object.assign({}, { body }, options));
	}

	function get(id) {

		if (typeof id !== 'string' ) throw new Error('Id parameters missing or not a string');

		let options = {
			uri: `forms/${id}`,
			method: 'GET'
		};

		return Request(options);
	}
}
