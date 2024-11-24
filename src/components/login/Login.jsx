import React from "react";
import './Login.css'



export const LoginModal = ({ onClose })=>{


    return(

        <div className="modal">
      <div className="modal-content">
        <h2>Login</h2>
        <form className="login-item">
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          
        </form>
       <div className="login-buttons">
       <button type="submit" className="login-button">Login</button>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
       </div>
      </div>
    </div>
    )
}

