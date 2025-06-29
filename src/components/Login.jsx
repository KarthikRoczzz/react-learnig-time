import React from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
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
    const { email, password } = formData;
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (email !== storedEmail || password !== storedPassword) {
      alert('Email or password is incorrect!');
      return;
    }
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" name='email' required onChange={handleChange} value={formData.email} />
          <input type="password" placeholder="Password" name='password' required onChange={handleChange} value={formData.password} />
          <button type="submit">Login</button>
          <p className="switch-text">Don't have an account? <a href="/signup">Signup</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
