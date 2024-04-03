const Numbers = ({personsToShow}) => {
    const OneNumber = (person) => {
        console.log("OneNumber", person.id)
        return(
            <p key={person.name}>
            {person.name} {person.number} 
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

//<button onClick={() => deleteThis(person.id)}>Delete</button>