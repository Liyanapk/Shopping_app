import React from "react";
import"./Footer.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
import { PiSelectionForegroundLight } from "react-icons/pi";
import { SiDiscover } from "react-icons/si";

export const Footer = () =>{

    return(

        <div className="footer">
            <div className="footer-section-1">

            <div className="logo-content">
            <img
              src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-ft-logo_300x.png?v=1632039782"
              alt="logo"
            ></img>
                <p>
                Creative, flexible, Infinite Possibilities
                and High Performance shopify theme
                to make your business shine! Suitable for multipurpose stores
                </p>
             </div>

             <div className="footer-info">
               
                <ul>
                    <li className="list"><strong>Informations</strong></li><br></br> 
                    <li className="list">My Account</li>
                    <li className="list">Support Center</li>
                    <li className="list">Terms & Conditions</li>
                    <li className="list">Returns & Exchanges</li>
                    <li className="list">Shipping & Delivery</li>
                </ul>
             </div>

             <div className="footer-shop">
                
                <ul>
                    <li className="list"><strong>Quick Shop</strong></li> <br></br>
                    <li className="list">Women</li>
                    <li className="list">Men</li>
                    <li className="list">Accessories</li>
                    <li className="list">New Arrivals</li>
                    <li className="list">Kids Collection</li>
                    <li className="list">sale</li>
                </ul>
             </div>

             <div className="footer-contact">
                    <ul>
                        <li  className="list-contact"><strong>Contact Us</strong></li><br></br>
                        <li  className="list-contact"><FaLocationDot  />55 Gallaxy Enque, 2568 steet, 23568 NY</li>
                        <li  className="list-contact"><FaPhoneSquare /><strong>Phone :</strong>53186215</li>
                        <li  className="list-contact"><TfiEmail /><strong>email :</strong>ufhv@gmail.com </li>
                        <div>

                        </div>
                    </ul>
                    
                </div>
             </div>

            
            <div className="footer-section-2">

                <div className="footer-signup" >
                    <h3>Newsletter Sign Up</h3>
                    <p>Enter your email to receive daily news and get 20% off coupon for all items.</p>

                    <div className="footer-email">
                    <input placeholder="Email Address" className="footer-input"></input>
                    <button className="footer-button">SUBSCRIBE</button>
                    </div>
                </div>

                <div className="footer-theme">
                    <p><strong>@  </strong>  2024 Optimal Shopify Theme.</p>
                    <p>All Rights Reserved. Ecommerce Software by Shopify.</p><br></br>
                    <p>Privacy Policy  |  Terms & Conditions  |  Contact Us</p><br></br>
                    <div className="footer-pays">
                    <FaCcVisa className="footer-payicons" />
                    <FaCcMastercard className="footer-payicons"/>
                    <SiAmericanexpress className="footer-payicons" />
                    <FaPaypal className="footer-payicons"/>
                    <PiSelectionForegroundLight className="footer-payicons" />
                    <SiDiscover className="footer-payicons"/>
                    </div>
                </div>


            </div>




    </div>
    )
}