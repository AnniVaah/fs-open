//TÄMÄ EI NYT OLE MUKANA!

//const CountryList = ({countriesToShow, personService, setPersons, persons, setConfirmMessage}) => {
const CountryList = (countriesToShow) => {
    console.log(countriesToShow)
    // const deleteThis = (id) => {
    //     const thisPerson = persons.find(person => person.id ===id)
    //     if (window.confirm(`Delete ${thisPerson.name}?`)){
    //         personService
    //         .deleteOne(id)
    //         .then(() => {
    //             setPersons(persons.filter(person => person.id !==id))
    //         })
    //         setConfirmMessage(`Deleted ${thisPerson.name}.`)
    //         setTimeout(() => {
    //           setConfirmMessage(null)
    //         }, 5000)
    //     }
        
    // }
     
   const OneCountry = (country) => {
        return(
                <li key={country}>{country}</li>
        )
    } 
    return(
      <ul className='countries'>
        {countriesToShow.map(country => OneCountry(country))}
      </ul>
    )
}

export default CountryList

