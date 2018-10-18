/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import Url from '../../src/endpoints/urls';

let id = 'anID';
let newId = 'anNewID';

let mock = {
	request : () => Promise.resolve(1)
};

describe( 'Url endpoint', () => {

	it( 'Should return and object with the required properties', () => {
		expect(Url(mock.request).url).toBeDefined();
		expect(Url(mock.request).url.get).toBeDefined();
		expect(Url(mock.request).url.set).toBeDefined();
	});

	it( 'url method should throw error if id parameter is not set', () => {

		let endpoint = Url(mock.request);

		expect(endpoint.url).toThrow();
		expect(() => endpoint.url(id)).not.toThrow();
	});

	it( 'url method should throw error if id is not a string', () => {

		let endpoint = Url(mock.request);

		expect(() => endpoint.url({})).toThrow();
	});

	it( 'url method should return a promise', (done) => {

		let endpoint = Url(mock.request);

		endpoint.url(id).then(done);
	});

	it( 'url.get method should throw error if id is not defined', () => {

		let endpoint = Url(mock.request);

		expect(() => endpoint.url.get()).toThrow();
	});

	it( 'url.get method should throw error if id is not a string', () => {

		let endpoint = Url(mock.request);

		expect(() => endpoint.url.get({})).toThrow();
	});

	it( 'url.get method should return a promise', (done) => {

		let endpoint = Url(mock.request);

		endpoint.url.get(id).then(done);
	});

	it( 'url.set method should throw error if old_id or newId are not defined', () => {

		let endpoint = Url(mock.request);

		expect(() => endpoint.url.set()).toThrow();
		expect(() => endpoint.url.set(id)).toThrow();
	});

	it( 'url.set method should throw error if old_id or newId are not a string', () => {

		let endpoint = Url(mock.request);

		expect(() => endpoint.url.set({})).toThrow();
		expect(() => endpoint.url.set(id, {})).toThrow();
		expect(() => endpoint.url.set({}, newId)).toThrow();
	});

	it( 'url.set method should return a promise', (done) => {

		let endpoint = Url(mock.request);

		endpoint.url.set(id, newId).then(done);
	});


});