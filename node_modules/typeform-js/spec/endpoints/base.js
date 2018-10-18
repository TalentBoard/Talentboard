/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import Base from '../../src/endpoints/base';

let mock = {
	request : () => Promise.resolve(1)
};

describe( 'base endpoint', () => {

	it( 'Should return and object with the required properties', () => {
		expect(Base(mock.request).base).toBeDefined();
	});

	it( 'base method should return a promise', (done) => {

		let endpoint = Base(mock.request);

		endpoint.base().then(done);
	});

});