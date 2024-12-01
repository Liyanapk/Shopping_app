import React, { useEffect, useState } from "react";
import Header from '../header/Header';
import { jwtDecode } from 'jwt-decode'; 
import './PersonOrder.css'

export const PersonOrder = () => {
    const [orderData, setOrderData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const token = localStorage.getItem("access_token");
                
                if (!token) {
                    throw new Error('No token found');
                }

                const decodedToken = jwtDecode(token);
                const userId = decodedToken.id;

                const response = await fetch(`http://localhost:5000/api/v1/order/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch order data.');
                }

                const data = await response.json();

                console.log('Fetched data:', data); // Debugging log

                // data is inside the data array
                if (data && data.data && data.data.length > 0) {
                    setOrderData(data.data[0]); // Set the first item of the array as the order data
                } else {
                    throw new Error('No orders found.');
                }

            } catch (err) {
                setError(err.message);
            }
        };

        fetchOrderData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Header />
            <div className="order-container">
                <h1>Order Page</h1>
                {orderData ? (
                    <div className="order-content">
                  
                        {Array.isArray(orderData.items) && orderData.items.length > 0 ? (
                            <ul >
                                {orderData.items.map((item) => {
                                    return (
                                        <li key={item.product._id} className="order-product-full">

                                            <div className="order-product">
                                                <div className="image-container">
                                                    
                                                    <img
                                                    src={`http://localhost:5000/${item.product.image}`}
                                                    alt={item.product.name}
                                                    className="order-product-image"
                                                    >     
                                                    </img>
                                                </div>
                                                <div className="product-products">
                                                    <p><strong>{item.product.name}</strong></p>
                                                    <p><strong>Quantity:</strong> {item.quantity}</p>
                                                    <p><strong>Price:</strong> ${item.product.price}</p>
                                                </div>
                                                </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>No items found in the order.</p>
                        )}

                      
                        {orderData.payment ? (
                            <div className="product-payment">
                                <h3><strong>Total:</strong> ${orderData.payment.amount}</h3>
                                <p><strong>Status:</strong> {orderData.payment.status}</p>
                                <p><strong>PaymentId:</strong> {orderData.payment.paymentId}</p>
                                <p><strong>Date:</strong> {new Date(orderData.payment.createdAt).toLocaleString()}</p>
                           </div>
                        ) : (
                            <p>No payment details available.</p>
                        )}
                    </div>
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </div>
    );
};
