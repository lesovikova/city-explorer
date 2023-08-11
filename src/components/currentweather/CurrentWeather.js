import React from 'react'
import './CurrentWeather.css'
import TableHead from '../TableHead/TableHead'
import TableRow from '../TableRow/TableRow'


export default function CurrentWeather({weather}) {
  return (
    <div className='currentWeather'>
      <TableHead marker={false}/>
     { weather.map((item, index) => {
        return <TableRow 
        number={index} 
        date={item.ob_time}
        tempreture={item.temp}
        sunrise={item.sunrise}
        sunset={item.sunset}
        pressure={item.pres}
        wind={item.wind_spd}
        snow={item.snow}
        humidity={item.rh}
        clouds={item.clouds}
        marker={false}
        key={index}
        />
      })}
    </div>
  )
}