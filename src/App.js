import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { countryNames, countryShortCodes, countryTuples } from 'country-region-data'

function App() {

  const API_CAT_URL = "https://catfact.ninja";
  const API_AGIFY_URL = "https://api.agify.io";
  const API_NATIONALIZE_URL = "https://api.nationalize.io";
  const API_GENDERIZE_URL = "https://api.genderize.io";
  const API_ROBOPIC_URL = "https://robohash.org";

  const [fact, setFact] = useState({});
  const [age, setAge] = useState(null);
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState(null);
  const [gender, setGender] = useState(null);
  const [showRobo, setShowRobo] = useState(false);
  const [roboName, setRoboName] = useState("");

  async function fetchCatData(){
    try {
      const response = await axios.get(API_CAT_URL+"/fact");
      setFact(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchGenderData(name){
    try {
      const response = await axios.get(API_GENDERIZE_URL, {
        params: {
          name: name,
        }
      });
      console.log(response.data);
      console.log(response.data.gender);

      if(response.data.gender === undefined || response.data.gender === "" || response.data.gender === null){
        setGender({gender: "N/A", probability: 0});
      }else{
        setGender(response.data);
      }

    } catch (error) {
      console.error(error);
    }
  }

  async function fetchNationalityData(name){
    try {
      const response = await axios.get(API_NATIONALIZE_URL, {
        params: {
          name: name,
        }
      });
      console.log(response.data);

      if((response.data.country).length > 0){

        let country_id = response.data.country[0].country_id;
        let country_prob = response.data.country[0].probability;

        let countryName = countryTuples.find((country)=>{
            return country[1] === country_id;
          }
        )

        setNationality({country: countryName[0], probability:country_prob});

      }else{

        setNationality({country: "N/A", probability:0});
        
      }
      

      

      

    } catch (error) {
      console.error(error);
    }

    // await console.log(countryTuples);
    // console.log(countryTuples.find((element)=>{
    //   return element[1] === "CN";
    // }));
  }

  function fetchRobopic(name){
    if(name.trim !== ""){
      setShowRobo(true);
      setRoboName(name);
    }else{
      setShowRobo(false);
    }
  }

  async function fetchAgeData(name){
    try {
      const response = await axios.get(API_AGIFY_URL, {
        params: {
          name: name,
        }
      });
      setAge(response.data);
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  //not desired way to fetch data
  useEffect(()=>{
    axios.get(API_CAT_URL+"/fact").then((response)=>{
      setFact(response.data);
    });

    // axios.get(API_AGIFY_URL, {
    //   params: {
    //     name: name,
    //   }
    // }).then((response)=>{
    //   setAge(response.data);
    // })

  },[])
  

  return (
    <div className="App">
      <div>
        <button onClick={fetchCatData}>Fetch Data</button>
        <p>{fact.fact}</p>
      </div>

      <br/>
      <hr/>
      <br/>

      <div>
        <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={()=>fetchAgeData(name)}>Predict Age</button>
        <h1>Name: {age?.name}</h1>
        <h2>Age: {age?.age === null ? "N/A": age?.age}</h2>
        <h2>Count: {age?.count}</h2>
      </div>

      <br/>
      <hr/>
      <br/>

      <div>
        <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
        <br/>
        <br/>
        {showRobo && <img alt='robo pic' src={`${API_ROBOPIC_URL}/${roboName}`} style={{border:"2px solid black", width:'200px', height:'200px', display: showRobo ? 'inline' : 'none'}}/>}
        <br/>

        {nationality && <h2>{nationality?.country}</h2>}
        {/* <h2>Origin: {nationality?.country !== "" ? nationality?.country : "N/A"}</h2> */}
        {nationality && <h4>Probability: {nationality?.probability !== 0 ? (nationality?.probability * 100).toFixed(2)+"%" : "N/A"}</h4>}
        {/* <h4>Probability: { nationality?.probability !== undefined ? (nationality?.probability !== 0 ? (nationality?.probability * 100).toFixed(2) : "N/A") : "N/A" }</h4> */}
        {gender && <h2>{gender.gender}</h2>}
        {/* <h2>Gender: {gender?.gender}</h2> */}
        {gender && <h4>Probability: {gender?.probability !== 0 ? (gender?.probability * 100).toFixed(2)+"%" : "N/A"}</h4>}
        {/* <h4>Probability: { gender?.probability !== undefined ? (gender?.probability !== 0 ? (gender?.probability * 100).toFixed(2) : "N/A") : "N/A" }</h4> */}

        <br/>
        <button onClick={()=>fetchGenderData(name)}>Predict Gender</button>
        <br/>
        <br/>
        <button onClick={()=>fetchNationalityData(name)}>Predict Country of Origin</button>
        <br/>
        <br/>
        <button onClick={()=>{fetchRobopic(name)}}>Generate Robopic</button>
        <br/>
        <br/>
        <button onClick={()=>{
          fetchGenderData(name); 
          fetchNationalityData(name); 
          fetchRobopic(name)}}
        >
          Apply All
        </button>
        <br/>
      </div>
    </div>
  );
}

export default App;
