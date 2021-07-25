import React from 'react';

const SearchBar = ({filter, updateFilter}) => {

  const handleChange = (event) => {
    event.preventDefault()
    updateFilter(event.target.value)
  }

  return (
    <p>
        Type to filter the news:
        <input 
          id="filter" 
          name="filter" 
          type="text"
          value={filter}
          onChange={handleChange}/>
      </p>
  )

}

export default SearchBar;
