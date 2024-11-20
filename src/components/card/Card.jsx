import React from "react";
import "./Card.css"

export const Card = ({ item }) =>{
 
    return(
        <div className="card">
        <img src="{item.image}" alt=""></img>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
    </div>
    )

}