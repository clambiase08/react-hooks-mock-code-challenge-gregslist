import React, {useState} from "react";

function ListingCard({description, image, location}) {

  const [isFavorited, setIsFavorited] = useState(false)

  function toggleFavorite() {
    setIsFavorited(isFavorited => !isFavorited)
  }

  const starFill = isFavorited ? "★" : "☆"


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button onClick={toggleFavorite} className="emoji-button favorite active">{starFill}</button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">{starFill}</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
