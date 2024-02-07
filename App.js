import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import ExpenseTracker from './ExpenseTracker/ExpenseTracker';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/expense" element={<ExpenseTracker />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;