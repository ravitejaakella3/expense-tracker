import React, { useEffect, useState, memo } from 'react';
import API from '../api';

const ExpenseList = memo(({ refreshTrigger }) => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const response = await API.get('/expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await API.delete(`/expenses/${id}`);
      alert('Expense deleted successfully!');
      fetchExpenses(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting expense:', error);
      alert('Failed to delete expense.');
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [refreshTrigger]);

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h2>Expense List</h2>
      {expenses.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {expenses.map((expense) => (
            <li
              key={expense._id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                marginBottom: '10px',
                backgroundColor: '#fff',
              }}
            >
              <span>
                {expense.amount} - {expense.category} - {expense.description} -{' '}
                {new Date(expense.date).toLocaleDateString()}
              </span>
              <button
                onClick={() => deleteExpense(expense._id)}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses found.</p>
      )}
    </div>
  );
});

export default ExpenseList;