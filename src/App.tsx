import './App.css';
import { Person, PersonDetails, Country } from './components/Person';


function App() {

  const myDetails: PersonDetails = {
    name: "Mike Tyson",
    age: 22,
    email: "john@mike.com",
    isMarried: false,
    friends: [],
    country: Country.India
  }

  const friend1: PersonDetails = {
    name: "Marie",
    age: 21,
    email: "marie@gmail.com",
    isMarried: false,
    friends: [],
    country: Country.Canada
  }

  const friend2: PersonDetails = {
    name: "Peter",
    age: 21,
    email: "peter@gmail.com",
    isMarried: false,
    friends: [],
    country: Country.Canada
  }

  const friend3: PersonDetails = {
    name: "Paul",
    age: 24,
    email: "paul@gmail.com",
    isMarried: true,
    friends: [],
    country: Country.Brazil
  }

  myDetails.friends = [friend1, friend2, friend3];
  friend1.friends = [myDetails, friend2, friend3];
  friend2.friends = [myDetails, friend1, friend3];
  friend3.friends =[myDetails, friend1, friend2];

  return (
    <div className="App">
      <Person {...myDetails} />
      <Person {...friend1} />
      <Person {...friend2} />
      <Person {...friend3} />
    </div>
  );
}

export default App;
