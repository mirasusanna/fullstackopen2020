import React from 'react'
import Country from './Country'
import FullCountry from './FullCountry'

const CountryList = props => {
  const countriesFound = props.countries.filter(country =>
    country.name.toLowerCase().includes(props.searchTerm.toLowerCase())
  )

  if (countriesFound.length > 10) {
    return (
      <p>Too many countries, please narrow down your search!</p>
    )
  } else if (countriesFound.length === 1) {
    return (
      <FullCountry country={countriesFound[0]} />
    )
  }

  return (
    <div>
      <h2>Countries</h2>
        {countriesFound.map(country =>
          <Country key={country.alpha2Code} country={country} />)
        }
    </div>
  )
}

export default CountryList