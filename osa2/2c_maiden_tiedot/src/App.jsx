import { useState, useEffect } from 'react'
import countryService from './services/countries'
import FilterForm from './components/FilterForm.jsx'
import CountryList from './components/CountryList.jsx'

const App = () => {
  const [countryNames, setCountryNames] = useState([])
  const [filterText, setFilterText] = useState('')
  const [countriesToShow, setCountriesToShow] = useState([])
  const [countryData, setCountryData] = useState()

  const handleFilterChange = (event) => {
    const newFilterText=event.target.value
    setFilterText(newFilterText)
    if (filterText !== ''){
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

  useEffect(()=>{
    if (countriesToShow.length === 1){
      countryService
        .getOne(countriesToShow[0])
        .then(cData => {
          setCountryData(cData)
        })
    }
  },[countriesToShow])

  return (
    <>
      <h1>Country Info</h1>
      <FilterForm handleFilterChange = {handleFilterChange} />
      <CountryList 
        countriesToShow = {countriesToShow} 
        countryData={countryData} 
      />
    </>
  )
}

export default App
