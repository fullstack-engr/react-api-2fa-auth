import React, { useState } from 'react';
import axios from 'axios';
import apiConfig from '../config/apiConfig'; // Import the base_url from apiConfig.js

const AuthenticationForm = ({ email }) => {
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [authMessage, setAuthMessage] = useState('');
  const [userData, setUserData] = useState(null);

  const handleAuthentication = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiConfig.base_url}/auth/admin-2fa-login`, // Use the base_url from apiConfig
        {
          email: email,
          password: password,
          code: code,
        },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          timeout: 10000,  // Set timeout to 10 seconds (10000 milliseconds)
        }
      );

      if (response.data.message === 'Logged in successfully') {
        setAuthMessage(response.data.message);
        setUserData(response.data.data);
      } else {
        setAuthMessage(response.data.message || 'Authentication failed.');
      }
    } catch (error) {
      // Log the error details to the console
      console.error('Error during authentication:', error.response || error.message || error);

      // Display a user-friendly error message
      setAuthMessage('Error occurred during authentication. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <h2>Authentication</h2>
      <form onSubmit={handleAuthentication}>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Code:
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      {authMessage && <p>{authMessage}</p>}

      {userData && (
        <div>
          <h3>Authenticated User</h3>
          <p>Access Token: {userData.access_token}</p>
          <p>Email Verified At: {userData.email_verified_at}</p>
          <p>User ID: {userData.id}</p>
        </div>
      )}
    </div>
  );
};

export default AuthenticationForm;
