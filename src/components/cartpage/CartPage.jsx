import React, { useEffect, useState } from "react";
import './CartPage.css';
import { jwtDecode } from 'jwt-decode';
import Header from '../header/Header'
import {loadStripe} from '@stripe/stripe-js';

export const CartPage = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const userLogin = localStorage.getItem("access_token") ? true : false;
        setIsLogin(userLogin);

        if (userLogin) {
            fetchCartItems();
        }
    }, []);

    const fetchCartItems = async () => {
        try {
            const token = localStorage.getItem("access_token");
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;

            const response = await fetch(`http://localhost:5000/api/v1/cart/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch cart items.");
            }

            const data = await response.json();

            if (data.data) {
                setCartItem(data.data);
            } else {
                throw new Error("Cart data not found in the response.");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const deleteCartItem = async (itemId) => {
        try {
            const token = localStorage.getItem("access_token");
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;

            const response = await fetch(`http://localhost:5000/api/v1/cart/${itemId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error("Failed to delete cart item.");
            }

            const data = await response.json();

            if (data.data) {
                setCartItem(data.data);
            } else {
                throw new Error("Failed to update cart after deletion.");
            }
        } catch (error) {
            setError(error.message);
        }
    };



    const updatedQuantity = async (itemId, newQuantity) => {

        try {

            const token = localStorage.getItem('access_token')
            const response = await fetch(`http://localhost:5000/api/v1/cart/${itemId}`, {

                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,

                },
                body: JSON.stringify({ quantity: newQuantity }),

            })

            if (!response.ok) {
                throw new Error("Failed update quantity.");

            }

            const data = await response.json()
            if (data.data) {
                setCartItem(data.data)
            } else {
                throw new Error("Failed to update cart after quantity update")
            }
        } catch (error) {
            setError(error.message)

        }
    }



    const handleIncrease = (itemId, currentQuantity) => {
        updatedQuantity(itemId, currentQuantity + 1)

    }


    const handleDecrease = (itemId, currentQuantity) => {
        if (currentQuantity > 1) {
            updatedQuantity(itemId, currentQuantity - 1)
        }
    }


    const grandTotal = cartItem.reduce((total, item) =>
        total + item.product.price * item.quantity,
        0
    )




    const makePayment = async()=>{
        const stripe = await loadStripe('pk_test_51QPzKEKlPIuU4563R5sdWzstAA3zxDgdaLdHPoEQAq7LsMFiFOqMulVPXI6yBWTwJyHyx4jp8JrUEE6oq8pJPcaR00yZOfVELU')

        const body ={
            product:cartItem
        }
        const headers ={
            'Content-type' : 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}` 
        }
        const response = await fetch (`http://localhost:5000/api/v1/cart/create-checkout-session`,{

            method:'POST',
            headers:headers,
            body:JSON.stringify(body)
        })
        
        const session = await response.json()
        const result = stripe.redirectToCheckout({
            sessionId:session.id
        })

    }

    return (



        <div>
            <Header />

            <div className="cart">

                <h1>CART LIST</h1>
                {error && <p className="error">{error}</p>}
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItem.length > 0 ? (
                            cartItem.map((item) => (
                                <tr key={item._id}>
                                    <td className="image-title">
                                        <img
                                            src={`http://localhost:5000/${item.product.image}`}
                                            alt={item.product.name}
                                            className="cart-product-image"
                                        />
                                        {item.product.name}
                                    </td>
                                    <td>{item.product.price}</td>
                                    <td className="quantity-button">
                                        <button onClick={() => handleDecrease(item._id, item.quantity)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => handleIncrease(item._id, item.quantity)}>+</button>
                                    </td>
                                    <td>{item.product.price * item.quantity}</td>
                                    <td>
                                        <button className="delete-button " onClick={() => deleteCartItem(item._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No cart items</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="grand-total">
                    <h3>GRAND TOTAL : ${grandTotal.toFixed(2)} </h3>
                    <button onClick={makePayment} className="pay-now-button">PAY NOW</button>
                </div>

            </div>

        </div>
    );
};
