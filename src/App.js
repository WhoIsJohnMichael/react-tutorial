import './App.css';
import { Person } from './components/Person';

function App() {  
  return (
    <div className="App">
      <Person name={22} age={22} email="john@mike.com" isMarried={false} friends={["Marie", "Peter", "Paul"]}/>
    </div>
  );
}

export default App;
