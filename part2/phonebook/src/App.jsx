import { useState, useEffect } from 'react'

import Persons from './components/persons'
import Addpersons from './components/addpersons'
import Searchname from './components/searchname'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  //filtered names set to person array
  const [filteredNames, setFilteredNames] = useState(persons) 

  const createPersonobject = (newName, newNumber) => {
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    /* some() method tests if at least one element in the persons
    array passes (person.name === newName) test */
    if (persons.some(person => person.name === newName)) {
      // alert() method instructs the browser to display a dialog box
      alert(`${newName} is already added to the phonebook`)
      return
    } else {
      /* add the new person to the list. concat method to assure React 
      recognize that the state has changed and triggers a re-render*/
      setPersons(persons.concat(personObject))
    }
  }

  //updating filtered names from Searchname component
  const handleSearchResult = (filtered) => {
    //updating filteredNames in App.jsx
    setFilteredNames(filtered)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Searchname persons={persons} setFilteredNames={handleSearchResult} />

      <h2>add a new</h2>
      <Addpersons createPersonobject={createPersonobject} />
      
      <h2>Numbers</h2>
      <ul>
        {filteredNames.map(person =>
          <Persons key={person.name} person={person} />
        )}
      </ul>

      <div>
        debug: {}
      </div>
    </div>
  )
}

export default App
