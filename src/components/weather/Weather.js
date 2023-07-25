import React from 'react';
import "./Weather.css"
import WeatherDay from '../weather_day/WeatherDay';

export default function Weather({data}) {
    // let datas = data.data;
    {
        if(data) {
            return (
                <div className='weather'>
                  {data.map( (item, index) => <WeatherDay key={index} item={item} />)}
                </div>
                )
        }
      }
  
  
}
