import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, removeListing }) {
  const listingDetails = listings.map((listing) => {
    return (
      <ListingCard
        key={listing.id}
        listing={listing}
        onDelete={removeListing}
      />
    );
  });

  return (
    <main>
      <ul className="cards">{listingDetails}</ul>
    </main>
  );
}

export default ListingsContainer;
