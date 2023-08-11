import TableHead from '../TableHead/TableHead'
import TableRow from '../TableRow/TableRow'
import './WeatherHistory.css'
import React from 'react'

export default function WeatherHistory({norwichWeather}) {
  return (
    <div className='weatherHistory'>
      <TableHead marker={true}/>
     { norwichWeather.map((item, index) => {
        return <TableRow 
        number={index+1} 
        date={item.date}
        tempreture={item.tempreture}
        sunrise={item.sunrise}
        sunset={item.sunset}
        pressure={item.pressure}
        wind={item.windSpeed}
        snow={item.snow}
        humidity={item.humidity}
        clouds={item.clouds}
        marker={true}
        key={index}
        comments={item.comments}
        />
      })}
    </div>
  )
}
