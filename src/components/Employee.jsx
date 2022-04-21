export const Employee = ({ emp, status }) => {
	return (
		<div className="employee">
			<div className="name">
				{emp.firstName} {emp.lastName}
			</div>
			<div className="title">{emp.title}</div>
			{status === 'internalUser' && (
				<div className="notes">{emp.notes}</div>
			)}
		</div>
	);
};