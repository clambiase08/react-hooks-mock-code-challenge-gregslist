import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

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
      <Header />
      <ListingsContainer listings={listings} removeListing={removeListing}/>
    </div>
  );
}

export default App;
