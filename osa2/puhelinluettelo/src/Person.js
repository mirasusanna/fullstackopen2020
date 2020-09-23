import React from 'react'

const Person = props => {
  return (
    <div>
      <strong>{props.name}</strong>
      <span> {props.number}</span>
    </div>
  )
}

export default Person