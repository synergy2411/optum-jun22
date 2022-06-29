import React from 'react';
import ExpenseItem from './ExpenseItem/ExpenseItem';

const Expenses = () => {
    // return React.createElement("div", { className : "container" }, 
    //             React.createElement("h4", {className :"tetx-center"}, "expenses again!!!"))

    const expenses = [
        { id: "e001", title: "grocery", amount: 12.99, createdAt: new Date("Dec 20, 2021") },
        { id: "e002", title: "shopping", amount: 39.99, createdAt: new Date("Aug 2, 2019") },
        { id: "e003", title: "insurance", amount: 99.9, createdAt: new Date("Jan 21, 2022") },
    ]

    return (
        <div className='container'>
            <p className='display-4 text-center'>Awesome Expenses App</p>
            <div className='row'>
                <ExpenseItem expense = {expenses[0]} />
                <ExpenseItem expense = {expenses[1]} />
                <ExpenseItem expense = {expenses[2]} />
            </div>
        </div>
    )
}

export default Expenses;