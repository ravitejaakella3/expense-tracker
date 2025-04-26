const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const connectDB = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');
const cors = require('cors'); // Import CORS

connectDB();

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

app.use('/api', expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
