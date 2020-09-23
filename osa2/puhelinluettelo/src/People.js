import React from 'react'
import Person from './Person'

const People = props => {
  return (
    <div>
      <h2>People</h2>
      {props.persons.length > 0
        ? props.persons.map(person =>
          <Person key={person.name} name={person.name} number={person.number} />
        )
        : props.message
      }
    </div>
  )
}

export default People