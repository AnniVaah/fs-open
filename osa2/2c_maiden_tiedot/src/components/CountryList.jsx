const CountryList = ({countriesToShow, countryData}) => {
    //console.log(countriesToShow)
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
      console.log('countrydata', countryData)
      //countryService.getOne(countryToShow).then(response => {
        //console.log('thenin sisältä:',response.capital[0]) //tässä oikea data
        //countryData = cData.data //tämä ei näy ulos!!
        //setCountryData(cData.data) //tämä aiheutti luupin
        //return(<p>{cData.data.capital[0]}</p>)//Nothing happens
      //})
    }
     
   const OneCountry = (country) => {
        return(
                <li key={country}>{country}</li>
        )
    } 
    //return(
      // <ul className='countries'>
      //   {countriesToShow.map(country => OneCountry(country))}
      // </ul>
      //<></>
    //)
}

export default CountryList

