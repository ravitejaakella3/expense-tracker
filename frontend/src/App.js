import React, { useState, Suspense } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const Dashboard = React.lazy(() => import('./components/Dashboard')); // Lazy load Dashboard

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refreshExpenses = () => {
    setRefreshTrigger((prev) => prev + 1); // Increment the trigger to refresh the list
  };

  return (
    <div
      className="App"
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px', // Add consistent spacing between components
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Expense Tracker</h1>
      <ExpenseForm refreshExpenses={refreshExpenses} />
      <ExpenseList refreshTrigger={refreshTrigger} />
      <Suspense fallback={<p>Loading Dashboard...</p>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
