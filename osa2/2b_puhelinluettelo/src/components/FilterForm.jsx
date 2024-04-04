const FilterForm = ({handleFilterChange}) =>{
    return(
      <form>
          <div>
            <label>Filter shown with: </label>
            <input onChange={handleFilterChange}/>
          </div>
        </form>
    )
  }
  
export default FilterForm