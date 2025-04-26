const Expense = require('../models/expenseModel');

// @desc Add a new expense
// @route POST /expenses
const addExpense = async (req, res) => {
  try {
    const { amount, category, description, date } = req.body;
    const expense = await Expense.create({ amount, category, description, date });
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Get all expenses
// @route GET /expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    console.error('Error fetching expenses:', error); // Log the error
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// @desc Update an expense
// @route PUT /expenses/:id
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Delete an expense
// @route DELETE /expenses/:id
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json({ message: 'Expense deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addExpense, getExpenses, updateExpense, deleteExpense };