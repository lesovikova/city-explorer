import { useState } from "react";
import './App.css';
import axios from "axios";
import Weather from './components/weather/Weather'

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
      setCity(res.data[0]);
      displayMap(res.data[0]);
      getWeather(res.data[0]);
      }
      catch (error) {
        console.log(error);
      }
    }

    const [weather, setWeather] = useState([]);

    async function getWeather(location) {
      const smth = +location.lon;
      const smth2 = +location.lat;

      console.log(typeof smth.toFixed(2));
      // const lon = Math.floor(smth*100)/100;
      // const lat =  Math.floor(smth2*100)/100;
      
      const lon = Math.round(smth*100)/100;
      const lat =  Math.round(smth2*100)/100;

      try{
        // const API = `http://localhost:8080/weather?$city_name=${cityName}&lon=${location.lon.toFixed(2)}&lat=${location.lat.toFixed(2)}`;
        // const API = `http://localhost:8080/weather?$city_name=${cityName}&lon=${lon}&lat=${lat}`;

        const API = `http://localhost:8080/weather?city_name=${cityName}&lon=${lon}&lat=${lat}`;
        // const API = `http://localhost:8080/weather?lon=35.91`;
        const res = await axios.get(API);
        console.log(API);
        console.log(res.data);
        console.log(res);
        
        setWeather(res.data);
      }
    catch (error) {
      console.log(error);
    }
    }


    const [map, setMap] = useState('');
    function displayMap(city) {
      const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${city.lat},${city.lon}&zoom=10`;
      setMap(API);
    }



  return (
    <div className="App">
      <form onSubmit={getCity}>
        <input onChange={getSearchWord} type='text' placeholder='enter a city name' name='input' />   
        <button>Explore!</button>
      </form>
      <p>You requested: {cityName}, the location is {city.display_name}, its longitude is {city.lon}, latitude - {city.lat}</p>
      {map && <img src={map} alt="map"/>}
      {weather && city && cityName && <Weather data={weather}/>}
    </div>
  );
}

export default App;
