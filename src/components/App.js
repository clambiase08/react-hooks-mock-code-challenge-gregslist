import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sortListings, setSortListings] = useState("none")

  const sortOptions = {
    none: { method: () => null },
    location: { method: (a, b) => (a.location > b.location ? 1: -1) }
  }

  const searchedListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))

  const sortedListings = [...searchedListings].sort(sortOptions[sortListings].method)
  

  function removeListing(deletedListing) {
    setListings(listings.filter((listing) => listing.id !== deletedListing.id))
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then( res => res.json())
    .then(listingData => setListings(listingData))
  }, [])

  return (


    <div className="app">
      <Header setSearch={setSearch} search={search} onSortChange={setSortListings}/>
      <ListingsContainer listings={sortedListings} removeListing={removeListing}/>
    </div>
  );
}

export default App;
