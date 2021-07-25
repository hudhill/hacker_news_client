import React from 'react';

const SearchBar = ({filter, updateFilter, resetStories}) => {

  const handleChange = (event) => {
    event.preventDefault()
    updateFilter(event.target.value)
  }

  const reset = (event) => {
    event.preventDefault()
    resetStories()
  }

  return (
    <>
      <p className="indent">Filter by title:
        <input 
          id="filter" 
          name="filter" 
          type="text"
          value={filter}
          onChange={handleChange}/>
        <button onClick={reset}>Reset</button>
      </p>
    </>
  )

}

export default SearchBar;
