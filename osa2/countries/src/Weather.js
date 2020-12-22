import React from 'react'

const Weather = ({ city, description, temperature, humidity }) => {
  return (
    <div>
      <h4>Weather in {city}</h4>
      <p><i>{description}</i></p>
      <p><b>Temperature: </b>{temperature}</p>
      <p><b>Humidity: </b>{humidity}</p>
    </div>
  )
}

export default Weather