import "./App.scss";
import employees from "./data/employees.json";
import { Header } from "./componenets/Header";
import { Footer } from "./componenets/Footer";

const userIsExternal = false;

function App() {
  return (
    <div className="App">
      <Header  userIsExternal={userIsExternal}/>
      <ul>
        {employees.map((emp, index) => {
          return (
            <li>
              {emp.firstName} {emp.lastName}
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
