import React from "react";
import './SuccessPayment.css';

export const SuccessPayment = () => {
  return (
    <div className="success-wrapper"> 
      <div className="success-container">
        <div className="success-icon">✔️</div>
        <h1 className="success-message">Payment Successful!</h1>
        <p className="success-description">
          Your payment was completed successfully. Thank you for your purchase!
        </p>
      </div>
    </div>
  );
};
