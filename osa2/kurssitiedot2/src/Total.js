import React from 'react'

const Total = (props) => {
  const sumExercises = () => {
    let total = props.parts.reduce((acc, curr) => {
      return acc + curr.exercises
    }, 0)
    return total
  }

  return (
    <p>
      Number of exercises {sumExercises()}
    </p>
  )
}

export default Total