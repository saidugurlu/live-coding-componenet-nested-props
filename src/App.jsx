import './App.scss';
import employees from './data/employees.json';

function App() {
	return (
		<div className="App">
			<h1>Employee Site</h1>
			<ul>
				{employees.map((emp, index) => {
					return <li>{emp.firstName} {emp.lastName}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;