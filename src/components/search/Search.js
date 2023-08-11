import React from 'react'
import './Search.css'

export default function Search({getSearchWord, getCity}) {
    function handleCurrent(e){
        e.preventDefault();
    }

    function handleHistory(e){
        e.preventDefault();
    }
  return (
    <div>
        <form className='form' onSubmit={getCity}>
        <input className='form__searchfield' onChange={getSearchWord} type='text' placeholder='enter a city name' name='input' />   
        <div className='form__buttons'>
        <button type='Submit' >Weather</button>
        {/* <button onClick={handleHistory}>Weather history</button> */}
        </div>
      </form>
    </div>
  )
}
