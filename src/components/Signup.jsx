import React from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName,email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    localStorage.setItem('name', fullName);
    localStorage.setItem('password', password);
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Signup</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" name='fullName' required onChange={handleChange} value={formData.fullName} />
          <input type="email" placeholder="Email" name='email' required onChange={handleChange} value={formData.email} />
          <input type="password" placeholder="Password" name='password' required onChange={handleChange} value={formData.password} />
          <input type="password" placeholder="Confirm Password" name='confirmPassword' required onChange={handleChange} value={formData.confirmPassword} />
          <button type="submit">Create Account</button>
          <p className="switch-text">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
