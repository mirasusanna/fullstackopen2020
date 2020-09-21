import React from 'react'
import ReactDOM from 'react-dom'
import Course from "./Course"

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'New course with plenty of exercises!',
          exercises: 100,
          id: 4
        }
      ]
    },
    {
      name: 'One more course',
      id: 2,
      parts: [
        {
          name: 'Second course, not much content here',
          exercises: 1,
          id: 1
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course} /> )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
