import './App.css';
import { useToggle } from './useToggle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Cat } from './components/Cat';
import { useCounter } from './useCounter';

function App() {
  // const [ isVisible, toggle ] = useToggle(false);
  // const [ isVisible2, toggle2 ] = useToggle(false);

  //if youre using the object return type then the name shall be the same name as the returned var
  const {state:isVisible, toggle} = useToggle();
  const {state:isVisible2, toggle:toggle2} = useToggle();
  const {count, increment, decrement, reset} = useCounter();

  const client = new QueryClient({});


  return (
    <>
      <QueryClientProvider client={client}>
        <div className="App">
          {isVisible && <p>I am visible</p>}
          <button onClick={toggle}>
            {isVisible ? "Hide" : "Show"}
          </button>
          {isVisible2 && <p>I am visible</p>}
          <button onClick={toggle2}>
            {isVisible2 ? "Hide" : "Show"}
          </button>

          <br/>
          <hr/>
          <br/>

          <Cat />

          <br/>
          <hr/>
          <br/>

          <p>{ count }</p>
          <button onClick={increment}>Add</button>
          <br/>
          <button onClick={decrement}>Subtract</button>
          <br/>
          <button onClick={reset}>Reset</button>

        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
