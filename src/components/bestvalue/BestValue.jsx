import React, { useContext } from "react";
import './BestValue.css';
import { DataContext } from "../../layout/DataProvider";

export const BestValue = () => {
    const data = useContext(DataContext);

    
    const backendUrl = "http://localhost:5000/";



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
                        const imageUrl = item.image ? `${backendUrl}/${item.image}` : "https://via.placeholder.com/150";
                        return (
                            <div key={item.id || index} className="jwellery-box">
                                <img
                                    src={imageUrl}
                                    alt={item.name || "No Name Available"}
                                    className="jwellery-img"
                                    onError={(e) => {
                                        e.target.onerror = null; // Prevent infinite loop
                                        e.target.src = "https://via.placeholder.com/150"; // Fallback placeholder image
                                    }}
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
