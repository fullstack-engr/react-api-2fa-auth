import React, { useState } from 'react';
import axios from 'axios';
import apiConfig from '../config/apiConfig'; // Import the base_url from apiConfig.js
import AuthenticationForm from './AuthenticationForm';

const Verification = () => {
  const [email, setEmail] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');
  const [showAuthenticationForm, setShowAuthenticationForm] = useState(false);

  const handleVerification = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiConfig.base_url}/auth/admin-2fa-email`,  // Use the base_url from apiConfig
        new URLSearchParams({
          email: email,
        }),
        {
          headers: {
            'Accept': 'application/json',
          },
          timeout: 10000,  // Set timeout to 10 seconds (10000 milliseconds)
        }
      );

      if (response.data.success) {
        setVerificationMessage(response.data.message);
        setShowAuthenticationForm(true); // Show the authentication form
      } else {
        setVerificationMessage('Verification failed.');
      }
    } catch (error) {
      // Log the error details to the console
      console.error('Error verifying email:', error.response || error.message || error);

      // Display a user-friendly error message
      setVerificationMessage('Error occurred during verification. Please try again.');
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <form onSubmit={handleVerification}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Verify Email</button>
      </form>

      {verificationMessage && <p>{verificationMessage}</p>}

      {showAuthenticationForm && <AuthenticationForm email={email} />}
    </div>
  );
};

export default Verification;
