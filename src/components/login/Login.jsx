import React, { useState } from "react";
import './Login.css'



export const LoginModal = ({ onClose })=>{


  const[ email,setEmail ] = useState('')
  const [ password,setPassword ]= useState('')
  const [ error,setError ]= useState('')


 const handleLogin = async(e)=>{
  e.preventDefault()
 



  try {
       

    const response = await fetch("http://localhost:5000/api/v1/user/login" ,{

      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), 
      });

      const data = await response.json(); 



      if(response.ok){
        localStorage.setItem("access_token",data.access_token)

        onClose()
      } else{
        setError("Failed to login try again later!")
      }
      
    }

  catch (error) {
    setError("Something wrong happened in login")
  }



}

    return(

        <div className="modal">
      <div className="modal-content-login">
        <h2>Login</h2>
        <form onSubmit={ handleLogin }> 
        <div className="login-item" >
          <input type="text" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
          
        </div>
       <div className="login-buttons">
       <button type="submit" className="login-button">Login</button>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
       </div>
       </form>
      </div>
    </div>
    )
  }

