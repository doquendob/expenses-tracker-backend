const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

const ExpenseModel = require('./models/Expense');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://doquendob:dob32165879@cluster0.y2bq7.mongodb.net/expenses-tracker?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});


app.post('/insertExpense', async (req, res) => {
    const expenseName = req.body.expense.title;
    const expenseDate = req.body.expense.date;
    const expensePrice = req.body.expense.amount;
    const expense = new ExpenseModel({ expenseName: expenseName, expenseDate: expenseDate, expensePrice: expensePrice });
    try {
        await expense.save(function (err) {
            if (err) {
                return res.send(err);
            } else {
                return res.json({ "Status": 200, "Message": "Expense saved successfully" });
            }
        });
    } catch (err) {
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log(`Server running at port 3001`);
});