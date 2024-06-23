## Getting Started
Step 1. Create app.
```
npx create-react-app <project-name>
```
or base the app name on the current directory.
```
npx create-react-app .
```

## Components
**Note:  React Components must always start with Uppercase Letters**
```
const GetNameComponent = () => {
  return <h1>John Michael</h1>;
}
```
### Using Components
```
function App() {
  return (
    <div className="App">
      <GetNameComponent />
    </div>
  );
}
```
Notice:
```
<GetNameComponent />
```

### Passing props to components
```
<GetNameComponent name="John Michael T. Santos" age={22} email="johnmichael.t.santos@gmail.com"/>
```

### Using props inside components
```
const GetNameComponent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <h2>{props.age}</h2>
    </div>
  );
}
```