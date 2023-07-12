import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {

  const listingDetails = listings.map((listing) => {
    return <ListingCard key={listing.id} description={listing.description} image={listing.image} location={listing.location} />
  })

  return (
    <main>
      <ul className="cards">
        {listingDetails}
      </ul>
    </main>
  );
}

export default ListingsContainer;
