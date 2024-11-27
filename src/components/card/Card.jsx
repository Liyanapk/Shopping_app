import React, { useContext } from "react";
import "./Card.css";
import { DataContext } from "../../layout/DataProvider";

export const Card = () => {
  // Directly access data from context, no need for destructuring
  const data = useContext(DataContext);

  return (
    <div className="grid-container">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img
                src={item.image ? `http://localhost:5000/${item.image}` : "https://via.placeholder.com/150"} // Using backend URL
                alt={item.name || "Item image"}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = "https://via.placeholder.com/150"; // Fallback image
                }}
              />
            </div>
            <div className="card-title">
              <h3>{item.name}</h3>
              <p>
                <strong>${item.price}</strong>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};
