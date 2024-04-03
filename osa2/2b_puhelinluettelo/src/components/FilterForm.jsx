const FilterForm = ({handleFilterChange}) =>{
    return(
      <form>
          <div>
            Filter shown with:
            <input onChange={handleFilterChange}/>
          </div>
        </form>
    )
  }
  
export default FilterForm