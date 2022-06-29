import React, { useState } from 'react';
import { v4 } from 'uuid';

const AddExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = event => setEnteredTitle(event.target.value)
    const amountChangeHandler = event => setEnteredAmount(event.target.value)
    const dateChangeHandler = event => setEnteredDate(event.target.value)

    const submitHandler = event => {
        event.preventDefault();
        const newExpense = {
            id : v4(),
            title : enteredTitle,
            amount : Number(enteredAmount),
            createdAt : new Date(enteredDate)
        }
        props.addExpense(newExpense)
    }

    return (
        <div className='card'>
            <div className="card-body">
                <h5 className='text-center'>Add Expense Form</h5>
                <form onSubmit={submitHandler}>
                    {/* title */}
                    <div className='form-group'>
                        <label htmlFor="title">Title : {enteredTitle}</label>
                        <input type="text" value={enteredTitle} 
                            onChange={titleChangeHandler} className="form-control" name="title" />
                    </div>
                    {/* amount */}
                    <div className='form-group'>
                        <label htmlFor="amount">Amount :</label>
                        <input type="number" min="0.9" step="0.1" 
                            value={enteredAmount} onChange={amountChangeHandler} 
                            className="form-control" name="amount" />
                    </div>
                    {/* createdAt */}
                    <div className='form-group'>
                        <label htmlFor="created-at">Created At :</label>
                        <input type="date" min="2019-01-04" max="2022-31-12" 
                            value = {enteredDate} onChange={dateChangeHandler} 
                            className="form-control" name="created-at" />
                    </div>
                    <br />
                    {/* buttons */}
                    <div className='row'>
                        <div className='col-6'>
                            <button className='btn btn-primary btn-block' type='submit'>Add Expense</button>
                        </div>
                        <div className='col-6'>
                            <button onClick={() => props.onCancel()} className='btn btn-warning btn-block'> Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddExpense;

