/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import Images from '../../src/endpoints/images';

let url = 'http://image.url';
let id = 'anID';

let mock = {
	request : () => Promise.resolve(1)
};

describe( 'Images endpoint', () => {

	it( 'Should return and object with the required properties', () => {
		expect(Images(mock.request).image).toBeDefined();
		expect(Images(mock.request).image.get).toBeDefined();
	});

	it( 'image method should throw error if url is not set', () => {

		let endpoint = Images(mock.request);

		expect(endpoint.image).toThrow();
	});

	it( 'image method should throw error if title is not a string', () => {

		let endpoint = Images(mock.request);

		expect(() => endpoint.image({})).toThrow();
	});

	it( 'image method should return a promise', (done) => {

		let endpoint = Images(mock.request);

		endpoint.image(url).then(done);
	});

	it( 'image.get method should throw error if id is not defined', () => {

		let endpoint = Images(mock.request);

		expect(() => endpoint.image.get()).toThrow();
	});

	it( 'image.get method should throw error if id is not a string', () => {

		let endpoint = Images(mock.request);

		expect(() => endpoint.image.get({})).toThrow();
	});

	it( 'image.get method should return a promise', (done) => {

		let endpoint = Images(mock.request);

		endpoint.image.get(id).then(done);
	});


});