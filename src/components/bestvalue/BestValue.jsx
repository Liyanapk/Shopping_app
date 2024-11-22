import React, { useContext } from "react";
import './BestValue.css'
import { DataContext } from "../../layout/DataProvider";

export const BestValue = () =>{
    
    const data = useContext(DataContext);
    

    const jwelery= data.filter(item=> item.category === "jewelery")
    


    return(

        <div className="best-value">
            <div className="best-value-head"> 
                <h2>Discover the Best Value Deals</h2>
                <p>Your One-stop Online Shopping Site For Clothes,
                     Accessories Footwear & More</p>
            </div>
        <div className="jwellery">
            {jwelery.length > 0 ? (jwelery.slice(0,4).map((item)=>(<div key={item.id} className="jwellery-box" >
                <img src={item.image} alt={item.name} className="jwellery-img"></img>
            </div>))) : (<p>No jwelery items</p>)}
        </div>
        </div>
    )
}