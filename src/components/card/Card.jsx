import React from "react";
import "./Card.css"

export const Card = ({ item }) =>{
 
    return(
       
<div>
<div className="card">
        <div className="card-image"> <img src={item.image} alt={item.title}></img> </div>
    </div>

<div className="card-title">
<h3>{item.title}</h3>
<p>{item.price}</p>
</div>
</div>







   
      
      
    )

}