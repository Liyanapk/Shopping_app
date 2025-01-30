import React, { useContext } from "react";
import './BestValue.css';
import { DataContext } from "../../layout/DataProvider";

export const BestValue = () => {
    const data = useContext(DataContext);

    

    return (
        <div className="best-value">
            <div className="best-value-head">
                <h2>Discover the Best Value Deals</h2>
                <p>Your One-stop Online Shopping Site For Clothes,
                    Accessories, Footwear & More</p>
            </div>
            <div className="jwellery">
                {data && data.length > 0 ? (
                    data.map((item, index) => {
                        return (
                            <div key={item.id || index} className="jwellery-box">
                                <img
                src={item.image ? `http://localhost:5000/${item.image}` : "https://via.placeholder.com/150"} 
                alt={item.name || "Item image"}
               
              />

                            </div>
                        );
                    })
                ) : (
                    <p>No jewelry items available</p>
                )}
            </div>
        </div>
    );
};




// import React, { useState, useEffect } from "react";
// import './BestValue.css';

// export const BestValue = () => {
//   // State to manage fetched data, success and error messages
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   useEffect(() => {
//     // Fetch data from backend
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/v1/catagory', {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch categories.");
//         }

//         const result = await response.json();
//         setData(result.data); // Update state with fetched data
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to run this only once when the component mounts

//   // Function to add item to cart
//   const addToCart = async (item) => {
//     try {
//       const token = localStorage.getItem("access_token");
//       const response = await fetch(`http://localhost:5000/api/v1/catagory`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ product: item._id, quantity: 1 }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add item to cart.");
//       }

//       const result = await response.json();
//       setSuccess("Item added to cart successfully!");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="best-value">
//       <div className="best-value-head">
//         <h2>Discover the Best Value Deals</h2>
//         <p>Your One-stop Online Shopping Site For Clothes, Accessories, Footwear & More</p>
//       </div>

//       {/* Display error or success messages */}
//       {error && <div className="error">{error}</div>}
//       {success && <div className="success">{success}</div>}

//       <div className="jwellery">
//         {data && data.length > 0 ? (
//           data.map((item, index) => {
//             return (
//               <div key={item.id || index} className="jwellery-box">
//                 <img
//                   src={item.image ? `http://localhost:5000/${item.image}` : "https://via.placeholder.com/150"}
//                   alt={item.name || "Item image"}
//                 />
//                 <button onClick={() => addToCart(item)}>Add to Cart</button>
//               </div>
//             );
//           })
//         ) : (
//           <p>No jewelry items available</p>
//         )}
//       </div>
//     </div>
//   );
// };
