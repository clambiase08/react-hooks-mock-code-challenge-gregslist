import React from "react";

function Search({setSearch, search, listings}) {

  function handleSearch(e) {
    const results = listings.filter((listing) => {
      if (e.target.value === "") {
        return listings
      } else {
        return listing.description.toLowerCase().includes((e.target.value).toLowerCase())
      }
    })
    setSearch({
      query: e.target.value,
      listings: results
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search.query}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
