import React, { useState, useEffect } from "react";

import { Card } from "../card/Card";
import "./BestSeller.css";
import { ViewCollection } from "../viewcollections/ViewCollection";

export const BestSeller = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("women"); // State to manage category selection

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/product?catagory=${category}`, // Use 'catagory' as per the backend
          {
            method: "GET",
            credentials: "include",
          }
        );

        const result = await response.json();
        console.log(result.data);

        setData(result.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (category) {
      fetchData(); // Fetch data only if category is selected
    }
  }, [category]); 

  return (
    <div className="seller-content">
      <h1>Best seller</h1>
      <p>Browse a huge variety of best seller</p>

      <div className="catagery">
        <ul className="catagery-list">
          <li>
            <a href="#women" onClick={()=>setCategory("women")} >
              WOMEN
            </a>
          </li>
          <li>
            <a href="#men" onClick={()=>setCategory("men")}>
              MEN
            </a>
          </li>
          <li>
            <a
              href="#kids"
             onClick={()=>setCategory("kids")}
            >
              KIDS
            </a>
          </li>
        </ul>
      </div>

      <Card items={data} />

      {/* <Card items={filterData.slice(0, 4)} /> */}

      <div className="view-collection-button">
        <ViewCollection />
      </div>
    </div>
  );
};









