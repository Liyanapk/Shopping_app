import React, { useEffect, useState } from "react";
import "./PersonDetailes.css";
import {jwtDecode} from 'jwt-decode';  
import Header from '../header/Header'

export const PersonDetailes = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if (!token) {
            console.error("No token found in localStorage");
            setError("No token found.");
            return;
        }

        
        const decoded = jwtDecode(token);
        const userId = decoded?.id;

        if (!userId) {
            console.error("User ID not found in the token.");
            setError("User ID not found.");
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/user/${userId}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data.");
                }

                const data = await response.json();
                setUser(data);
            } catch (err) {
                console.error("Error fetching user data:", err);
                setError("Failed to load user data. Please try again later.");
            }
        };

        fetchUserData();

    }, []); 

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>


            <Header />

<div className="profile-container">
            <h1>Person Profile</h1>
            {user?.data.profile_image && (
                <img
                src={`http://localhost:5000/${user.data.profile_image}`}
                    alt={`${user.data.first_name} ${user.data.last_name}`}
                />
            )}
            <div className="profile-item">

            <h2>{user?.data.first_name} {user?.data.last_name}</h2>
            <p><strong>Email:</strong> {user?.data.email}</p>
            <p><strong>Phone:</strong> {user?.data.phone}</p>
            <p><strong>Address:</strong> {user?.data.address}</p>
            </div>
        </div>


        </div>
       
    );
};
