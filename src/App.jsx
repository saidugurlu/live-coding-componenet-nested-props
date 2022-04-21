import './App.scss';
import employees from './data/employees.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Employee } from './components/Employee';

const status = 'internalUser';

function App() {
	return (
		<div className="App">
			<Header status={status}/>
			<div className="employees">
				{employees.map((emp, index) => {
					return <Employee key={index} emp={emp} status={status}/>;
				})}
			</div>
			<Footer status={status}/>
		</div>
	);
}

export default App;