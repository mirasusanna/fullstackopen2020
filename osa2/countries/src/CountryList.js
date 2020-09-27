import React from 'react'
import Country from './Country'
import FullCountry from './FullCountry'

const CountryList = ({ countries, searchTerm }) => {
  const countriesFound = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  /**
   * Show message if search term matches more than 10 countries.
   * Show country with details if there is only one match
   * otherwise render simple list of countries
   */
  if (countriesFound.length > 10) {
    return (
      <p>Too many countries, please narrow down your search!</p>
    )
  } else if (countriesFound.length === 1) {
    return (
      <FullCountry
        name={countriesFound[0].name}
        capital={countriesFound[0].capital}
        languages={countriesFound[0].languages}
        flag={countriesFound[0].flag}
      />
    )
  }

  return (
    <div>
      <h2>Countries</h2>
        {countriesFound.map(country =>
          <Country
            key={country.alpha2Code}
            country={country}
          />)
        }
    </div>
  )
}

export default CountryList