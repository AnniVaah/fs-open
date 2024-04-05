import { useState, useEffect } from 'react'
import countryService from './services/countries'
import FilterForm from './components/FilterForm.jsx'
import CountryList from './components/CountryList.jsx'

const App = () => {
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

  useEffect(() => {
    countryService.getAll().then(allData => {
      setCountryNames(allData.map(country => country.name.common))
    })
  }, [])
  console.log(countriesToShow)
  return (
    <>
      <h1>Country Info</h1>
      <FilterForm handleFilterChange = {handleFilterChange} />
      <CountryList countriesToShow = {countriesToShow} />
      {/* <ul className='countries'>
        {countriesToShow.map(country => <li key={country}>{country}</li>)}
      </ul> */}
    </>
  )
}
 // 
export default App
