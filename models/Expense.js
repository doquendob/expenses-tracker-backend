const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    expenseName: {
        type: String,
        required: false
    },
    expenseDate: {
        type: Date,
        required: false
    },
    expensePrice: {
        type: Number,
        required: false
    }
});

const Expense = mongoose.model("expensesData", ExpenseSchema)
module.exports = Expense