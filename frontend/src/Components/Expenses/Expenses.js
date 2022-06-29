import React, { useState } from 'react';
import AddExpense from './AddExpense/AddExpense';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import FilterExpense from './FilterExpense/FilterExpense';

const INITIAL_EXPENSES = [
    { id: "e001", title: "grocery", amount: 12.99, createdAt: new Date("Dec 20, 2021") },
    { id: "e002", title: "shopping", amount: 39.99, createdAt: new Date("Aug 2, 2019") },
    { id: "e003", title: "insurance", amount: 99.9, createdAt: new Date("Jan 21, 2022") },
]

const Expenses = () => {
    // return React.createElement("div", { className : "container" }, 
    //             React.createElement("h4", {className :"tetx-center"}, "expenses again!!!"))
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
    const [showAddForm, setShowAddForm] = useState(false)
    const [selectedYear, setSelectedYear] = useState('2019')

    const clickHandler = () => setShowAddForm(!showAddForm);

    const onAddExpense = (expense) => {
        setExpenses(prevExpenses => [expense, ...prevExpenses]);
        setShowAddForm(!showAddForm)
    }
    const onCancel = () => setShowAddForm(!showAddForm);

    const onDeleteExpense = id => setExpenses(prevExpenses => prevExpenses.filter(exp => exp.id !== id))
    
    const onFilterExpense = (selectedYear) => setSelectedYear(selectedYear);
    
    const filteredExpenses = expenses.filter(expense => expense.createdAt.getFullYear().toString() === selectedYear)

    return (
        <div className='container'>
            <p className='display-4 text-center'>Awesome Expenses App</p>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <button className='btn btn-dark btn-block' 
                        onClick={clickHandler}>{showAddForm ? 'Hide' : 'Show'} Expense Form</button>
                    <br/>
                    {showAddForm && <AddExpense onCancel={onCancel} addExpense = {onAddExpense} />}
                </div>
                <div className='col-3'>
                    <FilterExpense filterExpense = {onFilterExpense} initialYear = { selectedYear } />
                </div>
            </div>
            <br/>
            <div className='row'>
                { filteredExpenses.map(expense => <ExpenseItem deleteExpense={onDeleteExpense} expense={expense} key={expense.id} />) }
            </div>
        </div>
    )
}

export default Expenses;