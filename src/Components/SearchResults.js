import React, { useState } from "react";
import { searchFunctionality } from "../Services/SearchFunctionality";

const SearchResults = () => {
  const [search, setSearch] = useState("");

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    searchFunctionality(search, 1);
  };

  return (
    <div>
      <form onSubmit={searchHandler}>
        <label>Search:</label>
        <input onKeyUp={searchChangeHandler}></input>
        <button>Go</button>
      </form>
    </div>
  );
};

export default SearchResults;
