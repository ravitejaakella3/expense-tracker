# Expense Tracker

## Overview
The Expense Tracker application is a full-stack solution designed to help users record and visualize their expenses. It provides a user-friendly interface for managing expenses and offers insights through data visualization.

---

## Features
- Add, view, and delete expense records.
- Visualize expenses with a pie chart summarizing expenses by category.
- Responsive and user-friendly interface.
- Automatically updates the expense list and dashboard without requiring a page reload.

---

## Technologies Used
- **Frontend**: React, Chart.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

### Clone Repository
```bash
# Clone the repository
git clone https://github.com/ravitejaakella3/expense-tracker
```
---

## Project Structure
```
expense-tracker
├── backend
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   │   └── expenseController.js
│   │   ├── models
│   │   │   └── expenseModel.js
│   │   ├── routes
│   │   │   └── expenseRoutes.js
│   │   └── app.js
│   ├── package.json
│   └── .env
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── ExpenseForm.js
│   │   │   ├── ExpenseList.js
│   │   │   └── Dashboard.js
│   │   ├── styles
│   │   │   └── App.css
│   │   ├── App.js
│   │   ├── api.js
│   │   └── index.js
│   ├── package.json
└── README.md
```

---

## Setup Instructions

## Prerequisites
   - Ensure that MongoDB is installed and running locally on 127.0.0.1:27017.
   - Node.js and npm must be installed on your system.

### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following content:
   ```
   DATABASE_URL=mongodb://127.0.0.1:27017/expense_tracker
   PORT=5000
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```
4. Start the backend server:
   ```bash
   node src/app.js
   ```

---

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open the api.js file in the src directory and ensure the base URL is set correctly:
   ```
   import axios from 'axios';

   const API = axios.create({
      baseURL: 'http://localhost:5000/api', // Ensure this matches your backend URL
   });

   export default API;
   ```
4. Start the React application:
   ```bash
   npm start
   ```

---

## Notes
   - The backend server runs on http://localhost:5000 by default.
   - The frontend application runs on http://localhost:3000 by default.

---

## Usage
1. Open the application in your browser at `http://localhost:3000`.
2. Use the **Add Expense** form to add a new expense.
3. View the **Expense List** to see all expenses and delete any expense if needed.
4. Scroll to the **Expense Dashboard** to visualize expenses by category in a pie chart.

---

## Testing
1. **Use Postman or cURL to test the backend API endpoints**:
   - POST http://localhost:5000/api/expenses: Add a new expense.
   - GET http://localhost:5000/api/expenses: Retrieve all expenses.
   - DELETE http://localhost:5000/api/expenses/:id: Delete an expense by ID.
2. **Open the frontend in your browser and test the following**:
   - Add an expense using the form.
   - View the expense list and delete an expense.
   - Check the pie chart for accurate visualization of expenses.

---


## Architecture and Flow
1. **Add Expense**:
   - The user submits the form in the frontend.
   - The frontend sends a `POST` request to the backend.
   - The backend saves the expense to the MongoDB database.
   - The frontend refreshes the expense list and dashboard automatically.

2. **View Expense List**:
   - The frontend fetches all expenses from the backend using a `GET` request.
   - The expenses are displayed in a responsive list.

3. **Delete Expense**:
   - The user clicks the delete button for an expense.
   - The frontend sends a `DELETE` request to the backend with the expense ID.
   - The backend deletes the expense from the database.
   - The frontend refreshes the expense list and dashboard automatically.

4. **Expense Dashboard**:
   - The frontend fetches all expenses from the backend.
   - The data is processed to calculate totals by category.
   - A pie chart is rendered using the processed data.

---

## License
This project is licensed under the MIT License.