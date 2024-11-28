import React, { useState } from "react";
import './SighnUp.css'



export const SighnUpModal = ({ onClose })=>{





  const [userData, setUserData] = useState(
    {
      first_name: '',
      last_name: '',
      email:'',
      phone:'',
      address:'',
      password:''
  
    }
  )


  const [error, setError] = useState('')

  const handleOnChange = (name, value)=> {
      setUserData(prev=> {
       return  { ...prev, [name]: value }
      })
  }



  const handleSighnup = async(e)=>{
         
    e.preventDefault()

    try {

      const response =await fetch('http://localhost:5000/api/v1/user/',{

        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), 
      });

      const data = await response.json(); 

      if(response.ok){

        localStorage.setItem("access_token",data.access_token)
        onClose()

      }else{
        setError("Failed to login try again later!")
      }
      
    }

  catch (error) {
    setError("Something wrong happened in login")
  }



  }
  
  


    return(

        <div className="modal">
          <div className="modal-content">

             <h2>Sighn Up</h2>
             {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSighnup} >
               <div className="sighnup-item">
            <input 
           type="text" 
           placeholder="First Name" 
           name="first_name"
           value={userData.first_name} 
           onChange={(e)=>handleOnChange(e.target.name, e.target.value)} />

          <input type="text" 
          placeholder="Last Name" 
          name="last_name"
          value={userData.last_name} 
          onChange={(e)=>handleOnChange(e.target.name, e.target.value)}/>

          <input type="tel" 
          placeholder="Phone" 
          name="phone"
          value={userData.phone}
          onChange={(e)=>handleOnChange(e.target.name, e.target.value)}/>

          <input  type="text" 
          placeholder="Address"
          name="address"
          value={userData.address} 
          onChange={(e)=>handleOnChange(e.target.name, e.target.value)}/>

          <input type="text" 
          placeholder="E-mail" 
          name="email"
          value={userData.email} 
          onChange={(e)=>handleOnChange(e.target.name, e.target.value)}/>

          <input type="password" 
          placeholder="Password" 
          name="password"
          value={userData.password}  
          onChange={(e)=>handleOnChange(e.target.name, e.target.value)}/>
          
        </div>
       <div className="sighnup-buttons">
       <button type="submit" className="sighnup-button">Sighn Up</button>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
       </div>
       </form>
      </div>
    </div>
    )
}

