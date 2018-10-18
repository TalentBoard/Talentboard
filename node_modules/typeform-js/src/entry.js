/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

import Request from './request';
import Forms from './endpoints/forms';
import Base from './endpoints/base';
import Images from './endpoints/images';
import Designs from './endpoints/designs';
import Urls from './endpoints/urls';

export default (sessionToken) => {

	let request = Request(sessionToken);

	return Object.assign(
		{},
		Base(request),
		Forms(request),
		Images(request),
		Designs(request),
		Urls(request)
	);
}