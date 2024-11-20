import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Card } from "../card/Card";


export const BestSeller = () =>{

    const data = useContext(DataContext)



    return(

        <div className="seller">
            {data.slice(0,6).map((item)=>(
           <div className="card-container">
           <Card key={item.id} item={item}/>
</div>
           ))}
        </div>
    )
}