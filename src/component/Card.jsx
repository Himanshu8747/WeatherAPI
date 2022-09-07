import React from 'react'
import { useWeather } from '../Context/Weather'

const Card = () => {
  const weather = useWeather();  
  return (
    <div className="card">
        <img src={weather?.data?.current?.condition?.icon} alt="" />
        <h2>Temperature : {weather.data?.current?.temp_c}</h2>
        <h5>Location : {weather?.data?.location?.name},{weather?.data?.location?.region}</h5>
        <h5>Country : {weather?.data?.location?.country}</h5>
    </div>
  )
}

export default Card;