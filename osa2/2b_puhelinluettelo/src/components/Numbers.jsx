const Numbers = ({personsToShow, personService, setPersons, persons}) => {
    const deleteThis = (id) => {
        const thisPerson = persons.find(person => person.id ===id)
        if (window.confirm(`Delete ${thisPerson.name}?`)){
            personService
            .deleteOne(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !==id))
            })
        }
        
    }
    
    const OneNumber = (person) => {
        return(
            <p key={person.name}>
                {person.name} {person.number}  
                <button onClick={() => deleteThis(person.id)}>Delete</button>
            </p>
        )
    }
    return(
      <ul>
        {personsToShow.map(person => OneNumber(person))}
      </ul>
    )
}



export default Numbers

