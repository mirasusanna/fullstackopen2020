import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const FullCountry = ({ name, capital, languages, flag }) => {
  // Set some dummy data in case API does not work
  const [ weather, setweather] = useState({
    "coord": {
      "lon": 145.77,
      "lat": -16.92
    },
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 300.15,
      "pressure": 1007,
      "humidity": 74,
      "temp_min": 300.15,
      "temp_max": 300.15
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.6,
      "deg": 160
    },
    "clouds": {
      "all": 40
    },
    "dt": 1485790200,
    "sys": {
      "type": 1,
      "id": 8166,
      "message": 0.2064,
      "country": "AU",
      "sunrise": 1485720272,
      "sunset": 1485766550
    },
    "id": 2172797,
    "name": "Cairns",
    "cod": 200
  })

  const API_KEY = process.env.REACT_APP_API_KEY

  /** Fetch weather in capital city */
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}&units=metric`)
      .then(response => setweather(response.data))
      .catch(error => console.log(weather))
  }, [])

  return (
    <div>
      <h3>{name}</h3>
      <p><strong>Capital: </strong>{capital}</p>
      <h4>Languages:</h4>
      <ul>
        {languages.map(lang =>
          <li key={lang.iso639_1}>{lang.name}</li>
        )}
      </ul>
      <img src={flag} height="150" />
      <Weather
        city={capital}
        description={weather.weather[0].description}
        temperature={weather.main.temp}
        humidity={weather.main.humidity}
      />
    </div>
  )
}

export default FullCountry