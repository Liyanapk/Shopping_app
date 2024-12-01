import React, { useState } from "react";
import './SighnUp.css';

export const SighnUpModal = ({ onClose }) => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });


  const [error, setError] = useState('');
  const [profileImage, setProfileImage] = useState(null); // State to hold the profile image

  const handleOnChange = (name, value) => {
    setUserData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSighnup = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('first_name', userData.first_name);
    formData.append('last_name', userData.last_name);
    formData.append('email', userData.email);
    formData.append('phone', userData.phone);
    formData.append('address', userData.address);
    formData.append('password', userData.password);
    if (profileImage) {
      formData.append('image', profileImage);
    }

    try {
      const response = await fetch('http://localhost:5000/api/v1/user/', {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("access_token", data.access_token);
        onClose();
      } else {
        setError("Failed to sign up, try again later!");
      }
    } catch (error) {
      setError("Something went wrong during signup");
    }
  };

  const handleImageClick = () => {
    document.getElementById('image-input').click(); // Trigger the file input
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}

        <div className="profile-image-container" onClick={handleImageClick}>
          {profileImage ? (
            <img
              src={URL.createObjectURL(profileImage)}
              alt="Profile"
              className="profile-image"
            />
          ) : (
            <div className="add-image-text">Add Image</div>
          )}
        </div>

        {/* Hidden file input */}
        <input
          id="image-input"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />

        <form onSubmit={handleSighnup}>
          <div className="signup-item">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              value={userData.first_name}
              onChange={(e) => handleOnChange(e.target.name, e.target.value)}
            />

            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={userData.last_name}
              onChange={(e) => handleOnChange(e.target.name, e.target.value)}
            />

            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={userData.phone}
              onChange={(e) => handleOnChange(e.target.name, e.target.value)}
            />

            <input
              type="text"
              placeholder="Address"
              name="address"
              value={userData.address}
              onChange={(e) => handleOnChange(e.target.name, e.target.value)}
            />

            <input
              type="text"
              placeholder="E-mail"
              name="email"
              value={userData.email}
              onChange={(e) => handleOnChange(e.target.name, e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={(e) => handleOnChange(e.target.name, e.target.value)}
            />
          </div>

          <div className="signup-buttons">
            <button type="submit" className="signup-button">
              Sign Up
            </button>
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
