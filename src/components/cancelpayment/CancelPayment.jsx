import React from "react";
import './CancelPayment.css';

export const CancelPayment = () => {
  return (
    <div className="cancel-wrapper"> 
      <div className="cancel-container">
        <div className="cancel-icon">❌</div>
        <h1 className="cancel-message">Payment Cancelled</h1>
        <p className="cancel-description">
          Unfortunately, your payment was not successful. Please try again later.
        </p>
      </div>
    </div>
  );
};
