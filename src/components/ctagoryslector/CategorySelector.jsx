
import {useState} from "react";


export const CategorySelector=(data)=>{

    const [category, setCategory] = useState('women'); 


    
    const filterData = () => {
        return data.filter(item => {
          if (category === 'women') {
            return item.category === "women's clothing";  
          } else if (category === 'men') {
            return item.category === "men's clothing";    
          } else if (category === 'accessories') {
            return item.category === "jewelery";      
          } 
          return item;  
        });
      };


      const handleCategoryClick = (category) => {
        setCategory(category);  
      };

      return{filterData:filterData(),category,handleCategoryClick}
}