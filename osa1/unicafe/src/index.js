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
      <Button onClickHandler={giveFeedback('good')} name='good' />
      <Button onClickHandler={giveFeedback('neutral')} name='neutral' />
      <Button onClickHandler={giveFeedback('bad')} name='bad' />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClickHandler}>{props.name}</button>
  )
}

const Statistics = (props) => {
  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>Statistics</th>
          </tr>
        </thead>
        <tbody>
        <StatisticsLine text="Good" value={props.good}/>
        <StatisticsLine text="Neutral" value={props.neutral}/>
        <StatisticsLine text="Bad" value={props.bad}/>
        <StatisticsLine text="All" value={props.good + props.neutral + props.bad}/>
        <StatisticsLine text="Average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
        <StatisticsLine text="Positive" value={props.good / (props.good + props.neutral + props.bad) * 100}/>
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
