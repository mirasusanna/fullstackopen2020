import React from 'react'

const FullCountry = props => {
  const { country } = props

  return (
    <div>
      <h3>{country.name}</h3>
      <p><strong>Capital: </strong>{country.capital}</p>
      <h4>Languages:</h4>
      <ul>
        {country.languages.map(lang =>
          <li key={lang.iso639_1}>{lang.name}</li>
        )}
      </ul>
      <img src={country.flag} height="150" />
    </div>
  )
}

export default FullCountry