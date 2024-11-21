import React, { useContext } from "react";
import { Card } from "../card/Card";
import { DataContext } from "../bestseller/DataProvider";
import '../card/Card.css'
import "./TopSelection.css"
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";


export const TopSelection = () =>{

    const data = useContext(DataContext)
    

   
    
      return (
        <div className="selection-content">
          <h2>Top Picks On Fashion</h2>
          <Card items={data.slice(0, 3)} />
          
        </div>
      );
    };