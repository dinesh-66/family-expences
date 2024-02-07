import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../SignUp/SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Validate that email, username, and password are not empty
    if (!email || !username || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Perform sign-up logic (replace this with your actual sign-up logic)
    // For demonstration purposes, simulate a successful sign-up after 2 seconds
    setTimeout(() => {
      // Show toast notification for successful sign-up
      toast.success('Successfully signed up!');

      // Redirect to the 'Login' page after successful sign-up
      navigate('/');
    }, 1000);
  };

  const handleToggleAction = () => {
    // Toggle action between Login and Sign Up
    // In this case, only Sign Up functionality is demonstrated
    navigate('/');
  };

  return (
    <div className="scontainer">
      <ToastContainer />
      <div className="sheader">
        <div className="stext">Sign Up</div>
        <div className="sunderline"></div>
      </div>
      <div className="sinputs">
        <div className="sinput">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="sinput">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="sinput">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="ssubmit-container">
        <div className="ssubmit" onClick={handleSignUp}>
          Sign Up
        </div>
      </div>
      <div className="stoggle-action" onClick={handleToggleAction}>
        Already have an account? Login
      </div>
    </div>
  );
};

export default SignUp;
