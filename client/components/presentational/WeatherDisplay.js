import React from 'react'



const WeatherDisplay = props => {
  console.log('in weather display', props.weather)
  return (
    <div className='weather-Display-Container'>
      <ul className='weather-List'>
        {props.weather.map((weather, index) => (
          <li key={index}>{weather.address + ' ' + weather.currently.summary}</li>
        ))}
      </ul>
    </div>
  )
}




export default WeatherDisplay