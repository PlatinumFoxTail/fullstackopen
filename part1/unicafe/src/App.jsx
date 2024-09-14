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
      
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p> average {(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)} </p>
      <p> positive {good / (good + neutral + bad) * 100}%</p>

    </div>
  )
}

export default App