const Country = ({countryData}) => {
  const languages = countryData.languages
  const langArray = []
  for (var key in languages) {
    langArray.push(languages[key])
  }
  return(
    <>
      <hr/>
      <h2>{countryData.name.common}</h2>
      <p>Capital: {countryData.capital}</p>
      <p>Area: {countryData.area} km<sup>2</sup></p>
      <h3>Languages:</h3>
      <ul>
        {langArray.map(lang => <li key={lang}>{lang}</li>)}
      </ul>
      <img alt={countryData.flags.alt} src={countryData.flags.png} width="300px" border="2px"/>
    </>
  )
} 
    
const CountryList = ({countriesToShow, countryData}) => {
  if (countriesToShow.length>=10){
    return(
      <p>Too many matches. Please, specify your search.</p>
    )
  }
  else if (countriesToShow.length>1){
    return(
      <ul className='countries'>
        {countriesToShow.map(country => <li key={country}>{country}</li>)}
      </ul>
    )
  }
  else if (countryData==null){return null}
  else if (countriesToShow.length===1){
    return <Country countryData={countryData}/>
  }
}

export default CountryList

