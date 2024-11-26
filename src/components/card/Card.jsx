import React, { useContext } from "react";
import "./Card.css";
import { DataContext } from "../../layout/DataProvider";


export const Card = () => {

  const {data} = useContext(DataContext)

  return (
    <div className="grid-container">
      {data ?(
        data.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={item.image} alt='img'/>
            </div>
            <div className="card-title">
              <h3>{item.name}</h3>
              <p><strong>$</strong>{item.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};
