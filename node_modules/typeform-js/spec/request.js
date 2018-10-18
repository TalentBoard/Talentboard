/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import Request from '../src/request';

let token = 'tokenizer';

describe( 'Request', () => {

	it( 'Request should throw an error if token parameter is not set', () => {
		expect(Request).toThrow();
	});

	it( 'Request should return a request function', () => {
		expect(Request(token)).toEqual(jasmine.any(Function))
	});


});