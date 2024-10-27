import React from 'react';
import '../card.css'; // Link to the card.css for styling

const Card = ({ item }) => {
  return (
    <div className="futuristic-card">
      <div className="card-inner">
        <div className="card-front">
          <img className="card-image" src={item.image} alt={item.name} />
          <h2 className="card-title">{item.name}</h2>
        </div>
        <div className="card-back">
          <h3 className="card-description">{item.description}</h3>
          <p className="card-price">{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
