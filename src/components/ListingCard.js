import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const { image, description, location } = listing;

  const [isFavorited, setIsFavorited] = useState(false);

  function handleDelete() {
    onDelete(listing);
  }

  function toggleFavorite() {
    setIsFavorited((isFavorited) => !isFavorited);
  }

  const starFill = isFavorited ? "★" : "☆";

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button
            onClick={toggleFavorite}
            className="emoji-button favorite active"
          >
            {starFill}
          </button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">
            {starFill}
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
