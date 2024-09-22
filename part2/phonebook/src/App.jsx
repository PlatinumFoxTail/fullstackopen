import { useState } from 'react'
import Persons from './components/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }

    /* some() method tests if at least one element in the persons
    array passes (person.name === newName) test */
    if (persons.some(person => person.name === newName)) {
      // alert() method instructs the browser to display a dialog box
      alert(`${newName} is already added to the phonebook`)
      return
    }
    
    else {
      /* add the new person to the list. concat method to assure React 
      recognize that the state has changed and triggers a re-render*/
      setPersons(persons.concat(personObject)) 
      setNewName('') // clearing the input field into an empty string
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <ul>
        {persons.map(person => 
          <Persons key={person.name} person={person} />
        )}
      </ul>

      <div>
        debug: {newName}
      </div>
    </div>
  )
}

export default App
