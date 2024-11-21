import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import { Card } from "../card/Card";
import './BestSeller.css'
import '../card/Card.css'


export const BestSeller = () =>{

    const data = useContext(DataContext)
    
    

    return(

        

            <div className="seller-content">
                <h2>Best seller</h2>
                <p>Browse a huge variety of best seller</p>

                <div className="catagery">
                    <ul className="catagery-list">
                    <li><a href="#">WOMEN</a></li>
                    <li><a href="#">MEN</a></li>
                    <li><a href="#">ACCESSORIES</a></li>

                    </ul>
                    
                </div>
                <div className="grid-container">
                {data.slice(0,6).map((item)=>(
                
                    <div key={item.id}>
                <Card item={item}/>
                    </div>
           ))}
                </div>
            
            </div>
        
    )
}