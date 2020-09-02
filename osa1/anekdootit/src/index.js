import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [favorite, setFavorite] = useState(0)

  const randomizeAnecdote = () => {
    const randomInxed = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomInxed)
  }

  const voteAnecdote = (index) => {
    const newVotes = [...votes]
    newVotes[index] += 1
    setVotes(newVotes)
    findFavoriteAnecdote()
  }

  const findFavoriteAnecdote = () => {
    const mostVotes = Math.max(...votes)
    const newFavorite = votes.findIndex((vote) => { return vote === mostVotes })
    setFavorite(newFavorite)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <strong>{props.anecdotes[selected]}</strong>
      <p>Number of votes: <span style={{ color: 'magenta'}} >{votes[selected]}</span></p>
      <button onClick={randomizeAnecdote}>Gimme another one!</button>
      <button onClick={() => voteAnecdote(selected)}>Vote!</button>
      <h2>Most loved anecdote</h2>
      <p>{props.anecdotes[favorite]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
