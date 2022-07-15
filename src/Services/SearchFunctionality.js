// function will handle the work of querying the API and generating response JSON, function will take in two parameters (search and page)
// these will be updated with the search query input by the user and the page of results
export const searchFunctionality = (search, page) => {
  // search and page will be updated through state variables and then passed into the search url
  let searchUrl = `http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${search}&resultsFormat=native&page=${page}`;
  return new Promise((resolve) => {
    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
