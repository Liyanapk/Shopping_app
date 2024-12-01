import React from "react";
import "./ViewCollection.css"
import { useNavigate } from 'react-router-dom';

export const ViewCollection = () =>{
    const navigate = useNavigate()

    return(

        <div className="collections">
            <button className="viewcollection" onClick={()=>navigate('/product')}>VIEW COLLECTIONS</button>
        </div>
    )
}