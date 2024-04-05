//const CountryList = ({countriesToShow, personService, setPersons, persons, setConfirmMessage}) => {
const CountryList = ({countriesToShow}) => {
    console.log(countriesToShow)
    if (countriesToShow.length>=10){
      console.log("yli kymmenen", countriesToShow)
      return(
        <p>Too many matches. Please, specify your search.</p>
      )
    }
    else if (countriesToShow.length>1){
      console.log("max kymmenen", countriesToShow)
      return(
        <ul className='countries'>
          {countriesToShow.map(country => <li key={country}>{country}</li>)}
        </ul>
      )
    }
    else if (countriesToShow.length===1){
      const countryToShow=countriesToShow[0]
      console.log("yksi löytyi:", countryToShow)
    //console.log("Got country info?: ", countryInfo)
    //   const info = countryService.getOne(countryToShow)
    //   if (countryInfo!==info){
    //     setCountryInfo(info)
    //   }
      
    //   console.log("Got country info: ", countryInfo)
  
    //   return(
    //     <>
    //       <p>One country found: {countryToShow}</p>
    //       {/* <PrintCountryInfo countryToShow={countryToShow} setCountryInfo={setCountryInfo} countryInfo={countryInfo}/> */}
    //     </> 
    //   )
    }
     
   const OneCountry = (country) => {
        return(
                <li key={country}>{country}</li>
        )
    } 
    return(
      // <ul className='countries'>
      //   {countriesToShow.map(country => OneCountry(country))}
      // </ul>
      <></>
    )
}

export default CountryList

