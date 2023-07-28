import { useState } from "react";
import './App.css';
import axios from "axios";
import Weather from './components/weather/Weather'
import Header from "./components/header/Header";

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
      const API = `http://localhost:8080/city?q=${cityName}`
      const res = await axios.get(API);
      console.log(res);
      setCity(res.data[0]);
      displayMap(res.data[0]);
      const lonLat = getLonLat(res.data[0]);
      getWeather(lonLat);
      }
      catch (error) {
        console.log(error);
      }
    }


   function getLonLat(location) {
      const smth = +location.lon;
      const smth2 = +location.lat;
      const lon = Math.round(smth*100)/100;
      const lat =  Math.round(smth2*100)/100;
      return [lon, lat];
    }


    const [weather, setWeather] = useState([]);
    async function getWeather(data){
        try {
          const API = `http://localhost:8080/currentweather?lon=${data[0]}&lat=${data[1]}`
          const res = await axios.get(API);
          console.log(res.data);
          setWeather(res.data)
        }
        catch(err) {
          console.log(err);
        }
    }




    const [map, setMap] = useState('');
    function displayMap(city) {
      const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${city.lat},${city.lon}&zoom=10`;
      setMap(API);
    }
    

//APP return
  return (
    <div className="App, wrapper">
      <Header />
      <form onSubmit={getCity}>
        <input onChange={getSearchWord} type='text' placeholder='enter a city name' name='input' />   
        <button>Explore!</button>
      </form>
      <p>You requested: {cityName}, the location is {city.display_name}, its longitude is {city.lon}, latitude - {city.lat}</p>
      {map && <img src={map} alt="map"/>}
      {/* {weather && city && cityName && <Weather data={weather}/>} */}
    </div>
  );
}

export default App;
