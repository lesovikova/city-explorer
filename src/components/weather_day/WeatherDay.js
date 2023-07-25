import React from 'react'

export default function WeatherDay({item}) {
    console.log(item.valid_date);
  return (
    <div>
      {/* <span>{item.valid_date} </span>
      <span>{item.weather.description}</span> */}

      <span>{item.date} </span>
      <span>{item.description}</span>
    </div>
  )
}
