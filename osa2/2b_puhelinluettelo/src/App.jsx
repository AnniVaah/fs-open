import { useState, useEffect } from 'react'
import axios from 'axios'

const FilterForm = ({handleFilterChange}) =>{
  return(
    <form>
        <div>
          Filter shown with:
          <input onChange={handleFilterChange}/>
        </div>
      </form>
  )
}

const AddForm = ({addNumber, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return(
    <form onSubmit={addNumber}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Numbers = ({personsToShow}) => personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addNumber = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)}
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
    }

  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterText(event.target.value)
  }
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm handleFilterChange={handleFilterChange}/>
      <h3>Add a new number</h3>
      <AddForm 
        addNumber={addNumber} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />
      <h3>Numbers</h3>
      <Numbers personsToShow={personsToShow}/>
    </div>
  )

}

export default App