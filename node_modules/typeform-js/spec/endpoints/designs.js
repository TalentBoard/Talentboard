/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import Design from '../../src/endpoints/designs';

let colors = {
	"question": "#3D3D3D",
	"button": "#4FB0AE",
	"answer": "#4FB0AE",
	"background": "#FFFFFF"
};
let font = 'a google font';
let id = 'anID';

let mock = {
	request : () => Promise.resolve(1)
};

describe( 'Design endpoint', () => {

	it( 'Should return and object with the required properties', () => {
		expect(Design(mock.request).design).toBeDefined();
		expect(Design(mock.request).design.get).toBeDefined();
	});

	it( 'design method should throw error if title or fields parameters are not set', () => {

		let endpoint = Design(mock.request);

		expect(endpoint.design).toThrow();
		expect(() => endpoint.design(colors)).toThrow();
		expect(() => endpoint.design(colors, font)).not.toThrow();
	});

	it( 'design method should throw error if font is not a string', () => {

		let endpoint = Design(mock.request);

		expect(() => endpoint.design(colors, {})).toThrow();
	});

	it( 'design method should return a promise', (done) => {

		let endpoint = Design(mock.request);

		endpoint.design(colors, font).then(done)
	});

	it( 'design.get method should throw error if id is not defined', () => {

		let endpoint = Design(mock.request);

		expect(() => endpoint.design.get()).toThrow();
	});

	it( 'design.get method should throw error if id is not a string', () => {

		let endpoint = Design(mock.request);

		expect(() => endpoint.design.get({})).toThrow();
	});

	it( 'design.get method should return a promise', (done) => {

		let endpoint = Design(mock.request);

		endpoint.design.get(id).then(done)
	});


});