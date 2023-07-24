import { useState } from "react";
import './App.css';
import axios from "axios";

function App() {
    const [cityName, setCityName] = useState("");
    function getSearchWord(e) {
      setCityName(e.target.value);
    }

    const [city, setCity] = useState({});
    async function getCity(e){
      try {
      e.preventDefault();
      e.target.input.value = "";
      const API = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${cityName}&format=json`;
      const res = await axios.get(API);
      console.log(res);
      setCity(res.data[0]);
      displayMap(res.data[0]);
      
      }
      catch (error) {
        console.log(error);
      }
    }

    const [map, setMap] = useState('');
    function displayMap(city) {
      const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${city.lat},${city.lon}&zoom=10`;
      setMap(API);
      console.log(map);
    }

  return (
    <div className="App">
      <form onSubmit={getCity}>
        <input onChange={getSearchWord} type='text' placeholder='enter a city name' name='input' />   
        <button>Explore!</button>
      </form>
      <p>You requested: {cityName}, the location is {city.display_name}, its longitude is {city.lon}, latitude - {city.lat}</p>
      {console.log(map)}
      {map && <img src={map} alt="map"/>}
    </div>
  );
}

export default App;
