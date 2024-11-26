import React, { createContext, useEffect, useState } from "react";


export const DataContext = createContext()


export const DataProvider = ({children}) =>{


    const[data, setData] = useState([])


    useEffect(()=>{
     
        const fetchData = async ()=>{
            try {
                
                const response = await fetch('http://localhost:5000/api/v1/product', {
                    method: 'GET',
                    credentials: 'include', // Ensures cookies or headers are sent
                });
                
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