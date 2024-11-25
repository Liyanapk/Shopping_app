import React from "react";
import "./Card.css";

export const Card = ({ items = [] }) => {
  return (
    <div className="grid-container">
      {items.length > 0 ? (
        items.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-title">
              <h3>{item.name}</h3>
              <p><strong>$</strong>{item.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};
