// ExpenseList.js
import React from 'react';
import '../ExpenseTracker/styles.css';

function ExpenseList({ expenses, deleteExpense, returnToBank }) {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ${expense.amount}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            <button onClick={() => returnToBank(expense.id)}>Return to Bank</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
