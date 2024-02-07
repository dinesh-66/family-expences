// ExpenseTracker.js
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './styles.css'; // Add this line to import the CSS file

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const returnToBank = (id, amount) => {
    // Subtract the amount from the total expense
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id ? { ...expense, returned: true } : expense
    );
    setExpenses(updatedExpenses);
  };

  const calculateTotalExpense = () => {
    return expenses.reduce((total, expense) => (expense.returned ? total : total + expense.amount), 0);
  };

  return (
    <div className="expense-tracker">
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} returnToBank={returnToBank} />
      <div className="total-expense">Total Expense: ${calculateTotalExpense()}</div>
    </div>
  );
}

export default ExpenseTracker;
