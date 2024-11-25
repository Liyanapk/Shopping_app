import React from "react";
import './SighnUp.css'



export const SighnUpModal = ({ onClose })=>{


    return(

        <div className="modal">
      <div className="modal-content">
        <h2>Sighn Up</h2>
        <form className="sighnup-item">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="tel" placeholder="Phone" />
          <input  type="text" placeholder="Address"/>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          
        </form>
       <div className="sighnup-buttons">
       <button type="submit" className="sighnup-button">Login</button>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
       </div>
      </div>
    </div>
    )
}

