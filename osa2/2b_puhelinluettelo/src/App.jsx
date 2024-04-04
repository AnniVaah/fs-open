import { useState, useEffect } from 'react'
import personService from './services/persons'
import FilterForm from './components/FilterForm'
import AddForm from './components/AddForm'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const replaceNumber = (person, number) => {
    const changedPerson = {...person, number:number}
    personService
      .update(person.id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.name !== changedPerson.name ? person : returnedPerson))
      })
      setNewName('')
      setNewNumber('')
  }

  const addNumber = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      if (window.confirm(
        `${newName} is already added to phonebook. Replace the old number with a new one?`
      )){
        const thisPerson = persons.find(person => person.name ===newName)
        replaceNumber(thisPerson, newNumber)
      }
    }
    else{
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
      setNewName('')
      setNewNumber('')
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
      <Numbers 
        personsToShow={personsToShow} 
        personService={personService}
        setPersons={setPersons}
        persons={persons}/>
    </div>
  )

}

export default App