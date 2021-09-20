import React, { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVoted] = useState(new Array(anecdotes.length).fill(0))

  

  const mostVoted = () => {
    const maxIndex = votes.indexOf(Math.max(...votes))
    return maxIndex
  }

  const handleNextClick = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randNum)
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVoted(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <p>
        <Button onClick={handleVoteClick} text="vote" />
        <Button onClick={handleNextClick} text="next anecdote" />
      </p>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted()]}</p>
      <p>has {votes[mostVoted()]} votes</p>
    </div>
  )
}

export default App