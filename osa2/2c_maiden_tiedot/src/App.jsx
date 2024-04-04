import { useState, useEffect } from 'react'
import countryService from './services/countries'
import FilterForm from './components/FilterForm.jsx'
import CountryList from './components/CountryList.jsx'

const App = () => {
  //const [country, setCountry] = useState('')
  const [countryNames, setCountryNames] = useState([])
  const [filterText, setFilterText] = useState('')
  const [countriesToShow, setCountriesToShow] = useState([])

  const handleFilterChange = (event) => {
    const newFilterText=event.target.value
    setFilterText(newFilterText)
    if (newFilterText !== ''){
      setCountriesToShow(countryNames.filter(country => country.toLowerCase().includes(newFilterText.toLowerCase())))
    }
    else{
      setCountriesToShow([])
    } 
  }
  
  //countriesToShow.map(country => console.log(country))
  //const printCountry = (country) => <p>{country}</p> 

  useEffect(() => {
    countryService.getAll().then(allData => {
      setCountryNames(allData.map(country => country.name.common))
    })
  }, [])
  console.log(countriesToShow)
  return (
    <>
      <h1>Country Info</h1>
      <FilterForm handleFilterChange={handleFilterChange}/>
      <ul className='countries'>
        {countriesToShow.map(country => <li key={country}>{country}</li>)}
      </ul>
    </>
  )
}
 // 
export default App
