import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Lets make a function return another function because why not
  const giveFeedback = (feedback) => {
    let increaseFeedback

    if (feedback === 'good') {
      increaseFeedback = () => setGood(good + 1)
    } else if (feedback === 'neutral') {
      increaseFeedback = () => setNeutral(neutral + 1)
    } else {
      increaseFeedback = () => setBad(bad + 1)
    }

    return increaseFeedback
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={giveFeedback('good')}>good</button>
      <button onClick={giveFeedback('neutral')}>neutral</button>
      <button onClick={giveFeedback('bad')}>bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>All {props.good + props.neutral + props.bad}</p>
      <p>Average {(props.good -props.bad) / (props.good + props.neutral + props.bad)}</p>
      <p>Positive {props.good / (props.good + props.neutral + props.bad) * 100} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
