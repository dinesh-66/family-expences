import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  // State for tracking expenses
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');

  // Function to add a new expense
  const addExpense = () => {
    if (newExpense.trim() !== '') {
      setExpenses([...expenses, newExpense]);
      setNewExpense('');
    }
  };

  return (
    <div>
      <h1>Family Expenses Tracker</h1>

      {/* Form to add a new expense */}
      <div>
        <label htmlFor="expenseInput">Add Expense:</label>
        <input
          type="text"
          id="expenseInput"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
        />
        <button onClick={addExpense}>Add</button>
      </div>

      {/* List to display expenses */}
      <div>
        <h2>Expenses:</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;