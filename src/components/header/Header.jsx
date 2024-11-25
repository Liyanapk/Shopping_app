import React, { useState } from "react";
import "./Header.css"
import { LoginModal } from "../login/Login";
import { SighnUpModal } from "../sighnup/SighnUp";
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { PiChartBarHorizontalLight } from "react-icons/pi";


export const Header = () => {


  const [ isLogin,setLogin ] = useState(false)
  const [ isSighnUp,setSihnup ] = useState(false)

    return (
      <header>

        <div className="header">

          <div className="logo">
            <img
              src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-logo_140x@2x.png?v=1632039937"
              alt="logo"
            ></img>
          </div>


          <nav className="navitems">
            <ul className="navlist">
              <li className="list">
                <a href="#">HOME</a>
              </li>
              <li className="list">
                <a href="#">SHOPE</a>
              </li>
              <li className="list">
                <a href="#">PRODUCT</a>
              </li>
            </ul>
          </nav>


         <div className="icons">
            <div>
            <CiSearch className="icon"/>
            </div>
            <div>
            <BsPerson  className="icon" />
            </div>
            <div>
            <BsCart3 className="icon"/>
            </div>
            <div>
            <PiChartBarHorizontalLight  className="icon" />
            </div>
        </div>


          
          <div className="auth-buttons">
          <button className="login-btn" onClick={() => setLogin(true)}>
            Login
          </button>
          <button className="signup-btn" onClick={()=>setSihnup(true)}>Sign Up</button>
        </div>
    </div>
    { isLogin &&  <LoginModal  onClose={()=> setLogin(false)} />}
      {isSighnUp && <SighnUpModal onClose={()=>setSihnup(false)}/>}
</header>
    );


}