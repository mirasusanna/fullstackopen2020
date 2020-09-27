import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './CountryList'
import Filter from './Filter'

const App = () => {
  const [ searchTerm, setNewSearchTerm ] = useState('')
  const [ countries, setCountries] = useState([])

  /** Fetch all countries from restcountries.eu */
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => setCountries(response.data))
  })

  /** Event handler for search term */
  const handleSearchTermChange = event => {
    setNewSearchTerm(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries</h1>
      </header>
      <main>
        <Filter
          searchTerm={searchTerm}
          handleSearchTermChange={handleSearchTermChange}
          />
        <CountryList
          countries={countries}
          searchTerm={searchTerm}
        />
      </main>
    </div>
  );
}

export default App
