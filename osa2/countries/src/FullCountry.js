import React from 'react'

const FullCountry = ({ name, capital, languages, flag }) => {
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
    </div>
  )
}

export default FullCountry