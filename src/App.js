import './App.css';

function App() {
  return (
    <div className="App">
      {/* <GetNameComponent name="John Michael T. Santos" age={22} email="johnmichael.t.santos@gmail.com"/> */}
      <Job company="Google" position="Software Engineer" salary={50000}/>
      <Job company="Microsoft" position="Software Engineer" salary={60000}/>
      <Job company="Opera" position="Software Engineer" salary={40000}/>
    </div>
  );
}

const GetNameComponent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <h2>{props.age}</h2>
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.company}</h1>
      <h2>{props.position}</h2>
      <h2>{props.salary}</h2>
    </div>
  );
}

export default App;
