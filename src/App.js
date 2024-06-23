import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const [text, setText] = useState("");
  const [showGreet, setShowGreet] = useState(false);
  const [showColor, setShowColor] = useState("");
  const [hideMessage, setHideMessage] = useState("blue")

  const handleShowText = (event) => {
    if(showGreet){
      setText("Hello World");
    } else {
      setText("");
    }
    setShowGreet(!showGreet);
  }

  const handleShowText2 = (event) => {
    let greet = document.getElementById("greet");
    if(greet.textContent === ""){
      greet.textContent = "Hello World!";
    } else {
      greet.textContent = "";
    }
    console.log(greet.textContent)
  }

  return (
    <div className="App">
      <h1>{age}</h1>
      <button onClick={increaseAge}>Add</button>
      <br />
      <br />
      <hr />

      <input type="text" onChange={handleInputChange}/>
      <p>Input: {inputValue}</p>
      <br />
      <hr />

      <h1 id="greet">{text}</h1>
      {showGreet && <h1>Hello World!</h1>}
      {/* <button type='button' onClick={handleShowText} data-greet={handleShowText}>Show / Hide</button> */}
      {/* <button type='button' onClick={handleShowText2} >Show / Hide</button> */}

      <button onClick={()=>{
        setShowGreet(!showGreet)
      }}>Show / Hide</button>
      <br />
      <br />
      <hr />
      

      <h1 style={{color:showColor}}>Hello world!</h1>
      <button type='button' onClick={()=>{
        setShowColor(showColor === "" ? "green" : "")
      }}>Show / Hide Color</button>

      <br />
      <br />
      <hr />

      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Increase</button>
      <button onClick={()=>{
        setCount(count - 1)
      }}>Decrease</button>
      <button onClick={()=>{
        setCount(0)
      }}>Clear</button>

      <br />
      <br />
      <hr />

      {hideMessage === "blue" && <h1 style={{color:'blue'}} data-show='true'>This is the blue message</h1>}
      {hideMessage === "red" && <h1 style={{color:'red'}} data-show='true'>This is the red message</h1>}
      {hideMessage === "green" && <h1 style={{color:'green'}} data-show='true'>This is the green message</h1>}

      <button onClick={()=> {
        setHideMessage("blue");
      }}>All But Blue</button>
      <button onClick={()=>{
        setHideMessage("red")
      }}>All But Red</button>
      <button onClick={()=> {
        setHideMessage("green");
      }}>All But Green</button>

    </div>
  );
}

export default App;
