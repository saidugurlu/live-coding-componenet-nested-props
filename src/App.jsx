import './App.scss';
import employees from './data/employees.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Employee } from './components/Employee';

const status = 'externalUser';

function App() {
	return (
		<div className="App">
			<Header status={status}/>
			<ul>
				{employees.map((emp, index) => {
					return <Employee key={index} emp={emp} index={index} />;
				})}
			</ul>
			<Footer status={status}/>
		</div>
	);
}

export default App;