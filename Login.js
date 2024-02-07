import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Login/Login.css';

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate that username and password are not empty
    if (!username || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Add login condition for username "Arun" and password "arun123"
    if (username.toLowerCase() === 'dinesh' && password === 'dk123') {
      // Perform login logic (replace this with your actual login logic)
      // For demonstration purposes, simulate a successful login after 2 seconds
      setTimeout(() => {
        // Show toast notification for successful login
        toast.success('Successfully logged in!');

        // Redirect to the '/home' page after successful login
        navigate('/expense');
      }, 2000);
    } else {
      // Show toast notification for failed login
      toast.error('Invalid username or password.');
    }
  };

  const handleKeyPress = (event) => {
    // Check if the pressed key is 'Enter' (key code 13)
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  const handleToggleAction = () => {
    // Toggle action between Login and Sign Up
    // In this case, only Login functionality is demonstrated
    navigate('/SignUp');
  };

  return (
    <div className="lcontainer" onKeyPress={handleKeyPress}>
      <ToastContainer />
      <div className="lheader">
        <div className="ltext">Login</div>
        <div className="lunderline"></div>
      </div>
      <div className="linputs">
        <div className="linput">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="linput">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="lsubmit-container">
        <div className="lsubmit" onClick={handleLogin}>
          Login
        </div>
      </div>
      <div className="ltoggle-action" onClick={handleToggleAction}>
        Need an account? Sign Up
      </div>
    </div>
  );
};

export default Login;
