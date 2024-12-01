import React, { useContext } from "react";
import { Card } from "../card/Card";
import { DataContext } from "../../layout/DataProvider";
import '../card/Card.css'
import "./TopSelection.css"


export const TopSelection = () =>{

    const data = useContext(DataContext)
    

   
    
      return (
        <div className="selection-content">
          <h1>Top Picks On Fashion</h1>
          <Card  />
          
        </div>
      );
    };