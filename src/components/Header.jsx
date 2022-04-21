/* export const Header = ({ status }) => {
  return (
    <>
      <h1>Employee Site</h1>
      {status !== "internalUser" ? (
        <div className="message">This is our team:</div>
      ) : (
        <div className="message">The summer employee picnic is on May 15.</div>
      )}
    </>
  );
}; */


export const Header = ({ status }) => {

	let message = '';
	switch (status) {
		case 'internalUser':
			message = 'This is our team:';
			break;
		case 'externalUser':
			message = 'The summer employee picnic is on May 15.';
			break;
		default:
			message = '******* HAVE A NICE DAY ******';
			break;
	}

	return (
		<>
			<h1>Employee Site</h1>
			<div className="message">{message}</div>
		</>
	);
}