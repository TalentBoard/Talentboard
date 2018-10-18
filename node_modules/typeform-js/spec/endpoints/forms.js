/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import Forms from '../../src/endpoints/forms';

let title = 'title';
let id = 'anID';
let fields = [
	{
		"type": "short_text",
		"question": "What is your name?"
	}
];

let mock = {
	request : () => Promise.resolve(1)
};

describe( 'Forms endpoint', () => {

	it( 'Should return and object with the required properties', () => {
		expect(Forms(mock.request).form).toBeDefined();
		expect(Forms(mock.request).form.get).toBeDefined();
	});

	it( 'form method should throw error if title or fields parameters are not set', () => {

		let endpoint = Forms(mock.request);

		expect(endpoint.form).toThrow();
		expect(() => endpoint.form(title)).toThrow();
		expect(() => endpoint.form(title, fields)).not.toThrow();
	});

	it( 'form method should throw error if title is not a string', () => {

		let endpoint = Forms(mock.request);

		expect(() => endpoint.form({}, fields)).toThrow();
	});

	it( 'form method should return a promise', (done) => {

		let endpoint = Forms(mock.request);

		endpoint.form(title, fields).then(done);
	});

	it( 'form.get method should throw error if id is not defined', () => {

		let endpoint = Forms(mock.request);

		expect(() => endpoint.form.get()).toThrow();
	});

	it( 'form.get method should throw error if id is not a string', () => {

		let endpoint = Forms(mock.request);

		expect(() => endpoint.form.get({})).toThrow();
	});

	it( 'form.get method should return a promise', (done) => {

		let endpoint = Forms(mock.request);

		endpoint.form.get(id).then(done);
	});


});