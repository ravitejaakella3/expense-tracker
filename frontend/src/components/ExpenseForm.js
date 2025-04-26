import React, { useState } from 'react';
import API from '../api';

function ExpenseForm({ refreshExpenses }) {
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/expenses', formData);
      alert('Expense added successfully!');
      setFormData({ amount: '', category: '', description: '', date: '' });
      refreshExpenses(); // Refresh the expense list
    } catch (error) {
      console.error('Error adding expense:', error);
      alert('Failed to add expense.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Add Expense</h2>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
        style={{
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
        style={{
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        style={{
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        style={{
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;