import React, { useEffect, useState } from "react";
import "./Header.css"
import { LoginModal } from "../login/Login";
import { SighnUpModal } from "../sighnup/SighnUp";
import { BsPerson } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';



const Header = () => {

  const navigate = useNavigate()
  const [isLogin, setLogin] = useState(false)
  const [isSighnUp, setSihnup] = useState(false)
  // const [user, setUser] = useState('')
  // const [error,setError] = useState('')

  const[isHover, setHover] = useState(false)



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".person-icon-container")) {
        setHover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);




//   useEffect(() => {
//     const userLogin = localStorage.getItem("access_token") ? true : false;
//     setLogin(userLogin);

//     if (userLogin) {
//         fetchProfile();
//     }
// }, []);

// const fetchProfile = async () => {
//   try {
//       const token = localStorage.getItem("access_token");
//       if (!token) throw new Error("Token not found in localStorage.");

//       const decodedToken = jwtDecode(token);
//       console.log("Decoded Token:", decodedToken); // Debug: Ensure `_id` exists

//       const userId = decodedToken.id; // Use `_id` instead of `userId`
//       if (!userId) throw new Error("User ID (_id) not found in the token.");

//       const response = await fetch(`http://localhost:5000/api/v1/user/${userId}`, {
//           method: "GET",
//           headers: {
//               Authorization: `Bearer ${token}`
//           }
//       });

//       if (!response.ok) {
//           throw new Error("Failed to fetch user data.");
//       }

//       const data = await response.json();
//       if (data.data) {
//           setUser(data.data);
//       } else {
//           throw new Error("User data not found in response.");
//       }
//   } catch (error) {
//       console.error("Error fetching profile:", error.message);
//       setError(error.message);
//   }
// };


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
            <li className="list" onClick={()=>navigate('/home')}>
              <a href="home">HOME</a>
            </li>
            <li className="list" onClick={() => navigate('/product')}>
             <a href="product"> PRODUCT</a>
            </li>
          </ul>
        </nav>


        <div className="icons">
        <div>
            {/* {isLogin && user ? (
              <img
                src={`http://localhost:5000/${user.profile_image}`} // Replace with your backend image path
                alt="User Icon"
                className="user-icon"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            ) : ( */}
          <div 
          className="person-icon-container"
          onMouseEnter={() => setHover(true)}
        >
          <BsPerson className="icon" />
          {isHover && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={() => navigate('/person')}>Profile</li>
                <li onClick={() => navigate('/order')}>Order</li>
              </ul>
            </div>
          )}
        </div>

          </div>
          <div onClick={() => navigate('/cart')}>
            <BsCart3 className="icon" />
          </div>
        </div>



        <div className="auth-buttons">
          <button className="login-btn" onClick={() => setLogin(true)}>
            Login
          </button>
          <button className="signup-btn" onClick={() => setSihnup(true)}>Sign Up</button>
        </div>
      </div>
      {isLogin && <LoginModal onClose={() => setLogin(false)} />}
      {isSighnUp && <SighnUpModal onClose={() => setSihnup(false)} />}
    </header>
  );


}


export default Header