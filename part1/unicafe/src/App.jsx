import { useState } from 'react'

const Header = (props) => {
  //console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <p>{text} {value}</p>
)

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
        <p>No feedback given</p>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
      <StatisticLine text="average" value={(props.good * 1 + props.neutral * 0 + props.bad * -1) / (props.good + props.neutral + props.bad)} />
      <StatisticLine text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100 + "%"}/>
    </div>
  )
}

const App = () => {
  const welcome = 'give feedback'
  const statistics = 'statistics'
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header course={welcome} />

      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />

      <Header course={statistics} />
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App