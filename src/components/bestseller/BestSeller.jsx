import React, { useContext } from "react";

import { Card } from "../card/Card";
import "./BestSeller.css";
import { ViewCollection } from "../viewcollections/ViewCollection";


export const BestSeller = () => {
 



  return (
    <div className="seller-content">
      <h1>Best seller</h1>
      <p>Browse a huge variety of best seller</p>


      <Card />

      {/* <Card items={filterData.slice(0, 4)} /> */}

      <div className="view-collection-button">
        <ViewCollection />
      </div>
    </div>
  );
};
