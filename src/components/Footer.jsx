/* export const Footer = ({status}) => {

	let message = '';
	switch (status) {
		case 'internalUser':
			message = '"We stand on the shoulders of giants."';
			break;
		case 'externalUser':
			message = '&#169; All rights reserved.';
			break;
		default:
			message = '******* HAVE A NICE DAY ******';
			break;
	}
	return <div className="footer" dangerouslySetInnerHTML={{ __html:message}}></div>;
}; */

import { GeneralStatusMessage } from './GeneralStatusMessage';

export const Footer = ({status}) => {

	return <GeneralStatusMessage
		status={status}
		internalText="We stand on the shoulders of giants."
		externalText="&#169; All rights reserved."
	/>;
};