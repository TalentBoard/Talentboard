/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

export default (Request) => {

	const options = {
		method: 'GET'
	};
	
	return {
		base
	};

	function base() {

		return Request(options);
	}
}
