import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState({
    query: "",
    listings: []
  })

  const searchedListings = listings.filter((listing) => listing.description.includes(search.query))

  

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
      <Header setSearch={setSearch} search={search} listings={listings}/>
      <ListingsContainer listings={searchedListings} removeListing={removeListing}/>
    </div>
  );
}

export default App;
