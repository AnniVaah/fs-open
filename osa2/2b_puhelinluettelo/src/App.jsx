import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
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
    console.log('name changed', event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log('number changed', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log('filter changed', event.target.value)
    setFilterText(event.target.value)
  }
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))

  const Numbers = () => personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Filter shown with:
          <input onChange={handleFilterChange}/>
        </div>
      </form>
      <h2>Add a new number</h2>
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
      <h2>Numbers</h2>
      <Numbers/>
    </div>
  )

}

export default App