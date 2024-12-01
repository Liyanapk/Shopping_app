import React, { useContext, useState } from "react";
import "./Card.css";
import { DataContext } from "../../layout/DataProvider";
import { BsCartCheckFill } from "react-icons/bs";
import { CategorySelector } from "../ctagoryslector/CategorySelector";


export const Card = () => {
  // Directly access data from context, no need for destructuring
  const data = useContext(DataContext);
 

  const { filterData, handleCategoryClick } = CategorySelector(data);


  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleAddToCart = async (item) => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`http://localhost:5000/api/v1/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product: item._id, quantity: 1 }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart.");
      }

      const result = await response.json();
      setSuccess("Item added to cart successfully!");

    } catch (err) {
      setError(err.message);

    }
  };

  return (

    <div>

    
<div className="catagery">
        <ul className="catagery-list">
          <li>
            <a href="#women" onClick={() => handleCategoryClick("women")} >
              WOMEN
            </a>
          </li>
          <li>
            <a href="#men" onClick={() => handleCategoryClick("men")}>
              MEN
            </a>
          </li>
          <li>
            <a
              href="#accessories"
              onClick={() => handleCategoryClick("kids")}
            >
              KIDS
            </a>
          </li>
        </ul>
      </div>
     




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
            <div className="cart-align">
              <div className="card-title">
                <h3>{item.name}</h3>
                <p>
                  <strong>${item.price}</strong>
                </p>
              </div>
              <div>
                <BsCartCheckFill className="cart-icon" onClick={() => handleAddToCart(item)} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items to display</p>
      )}
    </div>

    </div>
  );
};
