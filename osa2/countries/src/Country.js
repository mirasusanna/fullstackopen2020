import React, { useState } from 'react'
import SimpleCountry from './SimpleCountry'
import FullCountry from './FullCountry'

const Country = ({ country }) => {
  const [ showFullCountry, setShowFullCountry ] = useState(false)

  /** Handle button click for showing details of the country */
  const handleShowCountryDetails = () => {
    setShowFullCountry(true)
  }

  /**
   * Render country with details if user has clicked the button
   */
  if (showFullCountry === true) {
    return (
      <FullCountry
        name={country.name}
        capital={country.capital}
        languages={country.languages}
        flag={country.flag}
      />
    )
  }

  return (
    <SimpleCountry
      name={country.name}
      handleShowCountryDetails={handleShowCountryDetails}
    />
  )
}

export default Country