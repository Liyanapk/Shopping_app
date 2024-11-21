import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Card } from "../card/Card";
import "./BestSeller.css";
import { ViewCollection } from "../viewcollections/ViewCollection";
import { CategorySelector } from "../categoryfilter/CategorySelector";

export const BestSeller = () => {
  const data = useContext(DataContext);

  const { filterData, handleCategoryClick } = CategorySelector(data);

  return (
    <div className="seller-content">
      <h1>Best seller</h1>
      <p>Browse a huge variety of best seller</p>

      <div className="catagery">
        <ul className="catagery-list">
          <li>
            <a href="#women" onClick={() => handleCategoryClick("women")}>
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
              onClick={() => handleCategoryClick("accessories")}
            >
              ACCESSORIES
            </a>
          </li>
        </ul>
      </div>

      <Card items={filterData.slice(0, 6)} />

      <div className="view-collection-button">
        <ViewCollection />
      </div>
    </div>
  );
};
