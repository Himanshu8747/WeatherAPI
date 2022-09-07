import React from 'react'
import {useWeather} from '../Context/Weather'
const Input = () => {
    const weather = useWeather();
    console.log(weather);
  return (
    <input
    className='input-field' 
    placeholder='Search Your City'
    value={weather.searchCity} 
    onChange={(e)=> weather.setSearchCity(e.target.value)}/>
  )
}

export default Input;