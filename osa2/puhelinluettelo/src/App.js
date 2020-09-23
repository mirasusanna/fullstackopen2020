import React, { useState } from 'react'
import Person from './Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  /**
   * Adds a new name to phonebook if it does not exist
   * 
   * @param {*} event
   */
  const addName = event => {
    event.preventDefault()
    if (nameExists(newName)) {
      alert(`${newName} is already added to phonebook and can't be added`)
    } else {
      const newPerson = {
        name: newName
      }
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
  }

  /** Event handler for name */
  const handleNameChange = event => {
    setNewName(event.target.value)
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
          <button type="submit">Add new</button>
        </div>
      </form>
      <h2>Numbers</h2>
       {persons.map(person => <Person key={person.name} name={person.name} /> )}
    </div>
  )
}

export default App