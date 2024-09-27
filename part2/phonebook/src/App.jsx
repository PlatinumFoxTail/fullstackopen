import { useState, useEffect } from 'react'

import Persons from './components/persons'
import Addpersons from './components/addpersons'
import Searchname from './components/searchname'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([
    /*{ name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }*/
  ]) 

  //filtered names set to person array
  const [filteredNames, setFilteredNames] = useState(persons)

  //error message state
  const [errorMessage, setErrorMessage] = useState(null)

  //useEffect hook to fetch data from json server
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, []) 

  //createPersonobject function to create a new OR update an existing person object
  const createPersonobject = (newName, newNumber) => {
    const person = persons.find(person => person.name === newName);

    if (person) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        //update the person object with new number
        const changedPerson = { ...person, number: newNumber };
        personService
          .update(person.id, changedPerson)
          .then(response => {
            setPersons(persons.map(p => p.id !== person.id ? p : response.data));
          })
      }
      //personService add the person object to the json server
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        //setting id to string, because dummy values' ids keeps on insiting being string despite of manual schange in db.json
        id: (persons.length + 1).toString()
      }
      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data));
        setErrorMessage(`Person '${newName}' added to the phonebook`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      })
    }
  }

  //delteing a person obeject
  const delPersonobject = (id) => {
    const person = persons.find(person => person.id === id)
    //window.confirm method displaying a dialog box
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .del(id)
        .then(response => {
          //updating persons array (in App.jsx) by removing the person object deleted
          setPersons(persons.filter(p => p.id !== id))
          //updating filteredNames (in browser) by removing the person object deleted
          setFilteredNames(filteredNames.filter(p => p.id !== id))
        })
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
      <Notification message={errorMessage} />
      
      <h2>Numbers</h2>
      <ul>
        {filteredNames.map(person =>
          <Persons key={person.name} person={person} delPersonobject={delPersonobject} />
        )}
      </ul>

      <div>
        debug: {} {}
      </div>
    </div>
  )
}

export default App
