import React, { useState } from 'react'
import Person from './Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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

  /** Event handler for name */
  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  /** Event handler for phone number */
  const handleNumberChange = event => {
    setNewNumber(event.target.value)
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
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
          {nameExists(newName) &&
            <i>This name exists in the phonebook.</i>
          }
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">Add new</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =>
          <Person key={person.name} name={person.name} number={person.number} />
        )}
    </div>
  )
}

export default App