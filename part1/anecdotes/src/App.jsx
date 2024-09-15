import { useState } from 'react'

const Header = (props) => {
  //console.log(props)
  return (
    <div>
      <h1>{props.anecdote}</h1>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const welcome = 'Anecdote of the day'
  const top_anecdote = 'Anecdote with most votes'

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState([0 ,0 ,0 ,0 ,0 ,0 ,0 , 0]); // creating array with zeroes of same length as annecdotes array

  const newAnecdote = () => {
    // Math.random generates a random floating value 0-1 and Mah.floor rounds down to nearest integer 
    const randomIndex = Math.floor(Math.random() * anecdotes.length);

    setSelected(randomIndex)
  }

  const newVote = () => {
    const copy = [...points] // copying the points
    copy[selected] += 1 // increasing vote value of the selected anecdote index
    setPoints(copy); // updating the points
    //console.log(copy)
  }

  //indexOf returns the first index that corresponds to the highest value in the points array
  const maxPoints = points.indexOf(Math.max(...points));

  return (
    <div>
      <Header anecdote={welcome} />
      <p>{anecdotes[selected]}</p>
      <Button onClick={newAnecdote} text="new anecdote" />
      <Button onClick={newVote} text="vote" />
      <Header anecdote={top_anecdote} />
      <p>{anecdotes[maxPoints]}</p>
    </div>
  )
}

export default App