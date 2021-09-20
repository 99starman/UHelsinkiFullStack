import React, { useState } from 'react'

const Statistics = ({ good, neutral, bad}) => {
  let all = good + neutral + bad
  let avg = good * 1 + neutral * 0 - bad * 1
  let pos = String(100 * (good / all)).concat("%")

  if (!(good === 0 && neutral === 0 && bad === 0)) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={all} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={pos} />
        </tbody>
      </table>
    )
  }
  return <p>No feedback given</p>
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>    
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}  

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGoodVote = () => setGood(good + 1)
  const addNeutralVote = () => setNeutral(neutral + 1)
  const addBadVote = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGoodVote} text="good" />
      <Button onClick={addNeutralVote} text="neutral" />
      <Button onClick={addBadVote} text="bad" />
      <h1>Statistics</h1>      
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
