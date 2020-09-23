import React from 'react'

const Person = props => {
  return (
    <div>
      <p>
        <strong>{props.name}</strong>
        <span> {props.number}</span>
      </p>
    </div>
  )
}

export default Person