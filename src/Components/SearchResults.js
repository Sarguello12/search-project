import React, { useEffect, useState } from "react";
import { searchFunctionality } from "../Services/SearchFunctionality";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();

    fetch(
      `http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${search}&resultsFormat=native&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        setResults(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={searchHandler}>
        <label>Search:</label>
        <input onChange={searchChangeHandler}></input>
        <button>Go</button>
      </form>
      <div>
        {results.map((result, index) => {
          return <p key={index}>{result.id}</p>;
        })}
      </div>
      <div></div>
    </div>
  );
};

export default SearchResults;
