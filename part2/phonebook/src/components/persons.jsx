const Persons = ({ person, delPersonobject }) => {
  const handleDel = (event) => {
    event.preventDefault()
    console.log(person.id)
    delPersonobject(person.id)
  }
  
  return (
    <li>{person.name} {person.number} <button type="button" onClick={handleDel}>delete</button> </li>
  )
}
  
export default Persons