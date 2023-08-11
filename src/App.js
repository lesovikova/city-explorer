import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import Weather from './components/weather/Weather'
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import CurrentWeather from "./components/currentweather/CurrentWeather";
import WeatherHistory from "./components/weatherHistory/WeatherHistory";


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
      const API = `https://weather-server-xte4.onrender.com/city?q=${cityName}`
      const res = await axios.get(API);
      setCity(res.data[0]);
      displayMap(res.data[0]);
      const lonLat = getLonLat(res.data[0]);
      getCurrentWeather(lonLat);
      getPastWeather();
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

    useEffect(() => {getCurrentWeather();}, []);

    const [weather, setWeather] = useState([]);
    async function getCurrentWeather(data){
        try {
          const API = `https://weather-server-xte4.onrender.com/currentweather?lon=${data[0]}&lat=${data[1]}`
          const res = await axios.get(API);
          setWeather(res.data.data)
        }
        catch(err) {
          console.log(err);
        }
    }

    useEffect(() => {getPastWeather();}, []);
    const [pastWeather, setPastWeather] = useState([]);

    async function getPastWeather(){
      try {
        const API = `https://weather-server-xte4.onrender.com/getPastweather`
        const res = await axios.get(API);
        setPastWeather(res.data);
        console.log(res.data);
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
      <Search getSearchWord={getSearchWord} getCity={getCity}/>
      {/* <form onSubmit={getCity}>
        <input onChange={getSearchWord} type='text' placeholder='enter a city name' name='input' />   
        <button>Explore!</button>
      </form> */}
      <p>You requested: {cityName}, the location is {city.display_name}, its longitude is {city.lon}, latitude - {city.lat}</p>
      {map && <img src={map} alt="map"/>}
      {weather.length>0 && <CurrentWeather weather={weather}/>}
      <h2>This is the latest weather for Norwich</h2>
      <WeatherHistory norwichWeather={pastWeather}/>
      {/* {weather && city && cityName && <Weather data={weather}/>} */}
    </div>
  );
}

export default App;
