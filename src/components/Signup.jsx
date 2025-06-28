import React from 'react';
import './Auth.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Signup</h2>
        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
          <p className="switch-text">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
