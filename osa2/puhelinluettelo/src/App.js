import React, { useState } from 'react'
import AddNewForm from './AddNewForm'
import Filter from './Filter'
import People from './People'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchTerm, setNewSearchTerm ] = useState('')

  /**
   * Adds a new name with phone number to phonebook if the name does not exist yet.
   * 
   * @param {*} event
   */
  const addName = event => {
    event.preventDefault()
    if (newName.length > 0 && newNumber.length > 0) {
      if (nameExists(newName)) {
        alert(`${newName} is already added to phonebook and can't be added`)
      } else {
        const newPerson = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      }
    } else {
      alert('Please provide a valid name and number.')
    }
  }

  /**
   * Find people based on name. Case-insensitive
   * 
   * @param {string} name
   * @returns {Object[]} array of people
   */
  const findPeople = name => {
    let people = persons.filter(person => person.name.toLowerCase().includes(name.toLowerCase()))
    return people
  }

  /** Event handler for name */
  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  /** Event handler for phone number */
  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  /** Event handler for search term */
  const handleSearchTermChange = event => {
    setNewSearchTerm(event.target.value)
  }

  /**
   * Check if name exists in phonebook
   * 
   * @param {string} name
   * @returns {boolean} true if name exists, false otherwise
   */
  const nameExists = name => {
    return persons.find(person => person.name === name) !== undefined
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      <AddNewForm
        newName={newName}
        addName={addName}
        handleNameChange={handleNameChange}
        nameExists={nameExists}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <People
        persons={findPeople(searchTerm)}
        message='No people found'
      />
    </div>
  )
}

export default App