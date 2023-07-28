import React from 'react';
import "./Header.css"

export default function Header({data}) {
 return(
    <header className='header'>
        <h1>This is the past weather application</h1>
        <p className='header__text'>If you are like me, than when you look at the weather forcast, you have no idea what to do with this numbers. </p>
        <p className='header__text'>I have always wanted to see the previous day's weather to understand what to expect, because I kinda remember weather yesterday and can extrapolate from there. Ever felt like this? Well, now you can have it. </p>
        <p className='header__text'>Click "Current Weather" to see this day's weather and click "Weather history" to see what the numbers were the last 7 days</p>
    </header>
 )  
}
