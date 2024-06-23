import styles from './App.module.css'
import { User } from './User'
import { Planet } from './Planet'

function App() {
  // const age = 16;
  // const isGreen = true;
  const names = ["Pedro", "Jake", "Jessica", "Michael", "John"];
  const users = [
    {name: "Pedro", age: 24},
    {name: "Michael", age: 22},
    {name: "Amy", age: 16},
  ]
  const planets = [
    {name: "Mercury", isGasPlanet: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWO5KcCjJSZy67L51y8SoEa5vyNUNsnmzhfOdjoah_pg&s"},
    {name: "Venus", isGasPlanet: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc2raQf-FlAtKf76YDfH2Sr3wDKbqJx5AjF2rFOXPfw&s"},
    {name: "Earth", isGasPlanet: false, img: "https://cdn.britannica.com/31/160431-050-C38A5086/Image-Earth-Russian-Elektro-L-weather-satellite-2012.jpg"},
    {name: "Mars", isGasPlanet: false, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg"},
    {name: "Jupiter", isGasPlanet: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9lyQ94OMj2-6AWiDEwC_rFWCLa5AuOau73EC5PPFrg&s"},
    {name: "Saturn", isGasPlanet: true, img: "https://planetfacts.org/wp-content/uploads/2023/12/planet_saturn.jpg"},
    {name: "Uranus", isGasPlanet: true, img: "https://c02.purpledshub.com/uploads/sites/48/2020/04/Hubble_Uranus-7f9693c.jpg"},
    {name: "Neptune", isGasPlanet: true, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/200px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg"},
  ]

  return (
    <div className={styles.App}>
      {/* {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>
      })} */}
      {/* {users.map((user, key) => {
        return <User name={user.name} age={user.age} key={key} />
      })} */}
      
      {/* Solution 1 explicit return*/}
      {/* {planets.map((planet, key)=> {
        return <Planet name= {planet.name} isGasPlanet={planet.isGasPlanet} img={planet.img} key={key}/>
      })} */}

      {/* Solution 2  implicit*/}
      {/* {planets.map((planet, key) => 
        <Planet name= {planet.name} isGasPlanet={planet.isGasPlanet} img={planet.img} key={key}/>
      )} */}

      {/* Solution 3  implicit With If (AND operator)*/}
      {/* {planets.map((planet, key) => planet.isGasPlanet &&
        <Planet name= {planet.name} isGasPlanet={planet.isGasPlanet} img={planet.img} key={key}/>
      )} */}

      {/* Solution 4 for multiline implicit */}
      {planets.map((planet, key)=> (
        <div id={key}>
          <Planet name= {planet.name} isGasPlanet={planet.isGasPlanet} img={planet.img} key={key}/>
        </div>
      ))}

    </div>
  );
}


export default App;

// function App() {
//   const age = 16;
//   const isGreen = true;

//   return (
//     <div className={styles.App}>
//       { age >= 18 ? <h1>Legal</h1> : <h1>Underage</h1> }
//       <h1 style={{ color : isGreen ? "green" : "red" }}>This has GREEN Color</h1>
//       <h1 style={{ color : 'red' }}>This has RED Color</h1>
//       { isGreen && <button> Button Sample </button> }
//     </div>
//   );
// }
