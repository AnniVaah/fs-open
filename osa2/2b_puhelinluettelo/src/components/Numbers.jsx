const Numbers = ({personsToShow, personService, setPersons, persons, setConfirmMessage}) => {
    const deleteThis = (id) => {
        const thisPerson = persons.find(person => person.id ===id)
        if (window.confirm(`Delete ${thisPerson.name}?`)){
            personService
            .deleteOne(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !==id))
            })
            setConfirmMessage(`Deleted ${thisPerson.name}.`)
            setTimeout(() => {
              setConfirmMessage(null)
            }, 5000)
        }
        
    }
    
    const OneNumber = (person) => {
        return(
            <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.number}</td>
                <td><button onClick={() => deleteThis(person.id)}>Delete</button></td> 
            </tr>
          
        )
    }
    return(
      <table className='numbers'>
        <tbody>
            {personsToShow.map(person => OneNumber(person))}
        </tbody>
      </table>
    )
}

export default Numbers

