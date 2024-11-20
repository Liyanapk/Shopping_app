import React from "react";
import "./Banner.css"
import { ViewCollection } from "../viewcollections/ViewCollection";

export const Banner = () => {


    return(
        <div className="banner">
               
               <div className="banner-items">
                    <h5>WE ARE BEYOND IMAGINATION</h5>
                    <h1 style={{fontSize:50}}>Infinite Possibilities</h1>
                    <h3>increase your exposure,costumers & sales</h3>
                     <ViewCollection  />
               </div>
               
        </div>
    )
}