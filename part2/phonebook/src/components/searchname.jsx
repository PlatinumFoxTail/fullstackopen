import { useState, useEffect } from 'react'

const Searchname = ({ persons, setFilteredNames }) => {
  const [searchName, setSearchName] = useState('')

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }
  
  // filtering persons and updating filteredNames when searchName changes
  // useEffect run the function when the component is rendered  
  useEffect(() => {
    /*filter persons array by names (case-insensitive) including the 
    input(case -insensitive) */
    const filtered = persons.filter(person =>
      person.name.toLowerCase().includes(searchName.toLowerCase())
    )
    //updating filteredNames in App.jsx
    setFilteredNames(filtered)
  }, [searchName, persons])

  return (
    <div>
      filter shown with <input value={searchName} onChange={handleSearchChange} />
    </div>
  )
}

export default Searchname