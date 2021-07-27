import React from "react";

function SearchBar({ setSortPattern, setFilteredBy }) {

  function changeSetSortPattern(e){
    setSortPattern(e.target.value)
  }
  function changeSetFilteredBy(e){
    setFilteredBy(e.target.value)
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={changeSetSortPattern}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={changeSetSortPattern}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={changeSetFilteredBy}>
          <option value="All" >All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
