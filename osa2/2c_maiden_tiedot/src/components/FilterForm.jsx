const FilterForm = ({handleFilterChange}) =>{
    return(
      <form>
          <div>
            <label>Find countries: </label>
            <input onChange={handleFilterChange}/>
          </div>
        </form>
    )
  }
  
export default FilterForm