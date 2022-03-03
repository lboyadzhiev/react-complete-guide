import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     inputTitle: '',
    //     inputValue: '',
    //     inputDate: '',
    // });

    const titleInputHandler = (event) => {
        setInputTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     inputTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, inputTitle: event.target.value };
        // });
    };

    const amountInputHandler = (event) => {
        setInputValue(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     inputValue: event.target.value,
        // });
    };

    const dateInputHandler = (event) => {
        setInputDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     inputDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: inputTitle,
            amount: inputValue,
            date: new Date(inputDate),
        };
        props.onSaveExpenseData(expenseData);
        setInputTitle('');
        setInputValue('');
        setInputDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={inputTitle} onChange={titleInputHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={inputValue}
                        min='0.01'
                        step='0.01'
                        onChange={amountInputHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={inputDate}
                        min='2019-01-01'
                        max='2022-12-31'
                        onChange={dateInputHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onChangeIsClick}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
