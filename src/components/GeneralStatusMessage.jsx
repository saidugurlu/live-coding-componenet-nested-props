export const GeneralStatusMessage = ({
	status,
	internalText,
	externalText,
}) => {
	console.log(internalText);
	let message = '';
	switch (status) {
		case 'internalUser':
			message = internalText;
			break;
		case 'externalUser':
			message = externalText;
			break;
		default:
			message = '******* HAVE A NICE DAY ******';
			break;
	}

	return <div className="message">{message}</div>;
};