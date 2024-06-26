import { useState } from 'react'

const Button = ({handleClick, text}) =>
  <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) =>(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) =>{
  const total = good+neutral+bad
  if (total === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return(
    <>
      <h1>Statistics</h1>
      <table><tbody>
      <StatisticLine text="Good:" value ={good}/>
      <StatisticLine text="Neutral:" value ={neutral}/>
      <StatisticLine text="Bad:" value ={bad}/>
      <StatisticLine text="All:" value ={total}/>
      <StatisticLine text="Average:" value ={(good-bad)/total}/>
      <StatisticLine text="Positive (%):" value ={(good/total*100)}/>
      </tbody></table>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => { setGood(good+1) }
  const handleNeutralClick = () => { setNeutral(neutral+1) }
  const handleBadClick = () => { setBad(bad+1) }

  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text={'Good'} />
      <Button handleClick={handleNeutralClick} text={'Neutral'} />
      <Button handleClick={handleBadClick} text={'Bad'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
