import React, { useEffect, useState, memo } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import API from '../api';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = memo(() => {
  const [chartData, setChartData] = useState(null);

  const fetchChartData = async () => {
    try {
      const response = await API.get('/expenses');
      const categories = {};
      response.data.forEach((expense) => {
        categories[expense.category] = (categories[expense.category] || 0) + expense.amount;
      });

      // Sort categories by amount and take the top 5
      const sortedCategories = Object.entries(categories)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      setChartData({
        labels: sortedCategories.map(([category]) => category),
        datasets: [
          {
            data: sortedCategories.map(([, amount]) => amount),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '20px auto',
        textAlign: 'center',
        padding: '0', // Remove unnecessary padding
      }}
    >
      <h2 style={{ marginBottom: '10px' }}>Expense Dashboard</h2>
      {chartData ? (
        <div style={{ position: 'relative', height: '300px', width: '100%' }}>
          <Pie
            data={chartData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom',
                },
              },
            }}
          />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
});

export default Dashboard;