## Adding CSS
```
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="Greeting">Hello World!</h1>
    </div>
  );
}

export default App;

```
or 
by renaming ``` App.css ``` to ``` App.module.css ```

```
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.Greeting}>Hello World!</h1>
    </div>
  );
}

export default App;
```

## Conditional Rendering
```
function App() {
  const age = 16;
  const isGreen = true;

  return (
    <div className={styles.App}>
      { age >= 18 ? <h1>Legal</h1> : <h1>Underage</h1> }
      <h1 style={{ color : isGreen ? "green" : "red" }}>This has Color</h1>
    </div>
  );
}
```
or

#### sample showing simple rendering using &&
```
{ isGreen && <button> Button Sample </button> }
```
