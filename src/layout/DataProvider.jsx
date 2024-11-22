import React, { createContext, useEffect, useState } from "react";


export const DataContext = createContext()


export const DataProvider = ({children}) =>{


    const[data, setData] = useState([])


    useEffect(()=>{
     
        const fetchData = async ()=>{
            try {
                
                const response = await fetch("https://fakestoreapi.com/products");
                const result = await response.json();

                setData(result)
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchData();

    },[])




    return(
       <DataContext.Provider value={data} >
       {children}
       </DataContext.Provider>

    )


}