
import {useState} from "react";


export const CategorySelector=(data)=>{

    const [category, setCategory] = useState('women'); 


    
    const filterData = () => {
        return data.filter(item => {
          if (category === 'women') {
            return item.catagory === "women";  
          } else if (category === 'men') {
            return item.catagory === "men";    
          } else if (category === 'kids') {
            return item.catagory === "kids";      
          } 
          return item;  
        });
      };


      const handleCategoryClick = (newCategory) => {
        setCategory(newCategory);  
    };

      return {filterData,category,handleCategoryClick }
}








// // import { useState } from "react";

// // export const CategorySelector = (data) => {
// //   const [category, setCategory] = useState("women");

// //   // Dynamically filter data
// //   const filterData = () => {
// //     return data.filter((item) => item.catagory === category);
// //   };

// //   const handleCategoryClick = (newCategory) => {
// //     setCategory(newCategory);
// //   };

// //   return { filterData, category, handleCategoryClick };
// // };
  