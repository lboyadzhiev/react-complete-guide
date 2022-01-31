import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseFrom = () => {
    // const [inputTitle, setInputTitle] = useState('');
    // const [inputValue, setInputValue] = useState('');
    // const [inputDate, setInputDate] = useState('');

    const [userInput, setUserInput] = useState({
        inputTitle: '',
        inputValue: '',
        inputDate: '',
    });

    const titleInputHandler = (event) => {
        // setInputTitle(evetn.target.value);
        setUserInput({
            ...userInput,
            inputTitle: event.target.value,
        });
    };

    const amountInputHandler = (event) => {
        // setInputValue(evetn.target.value);
        setUserInput({
            ...userInput,
            inputValue: event.target.value,
        });
    };

    const dateInputHandler = (event) => {
        // setInputDate(evetn.target.value);
        setUserInput({
            ...userInput,
            inputDate: event.target.value,
        });
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleInputHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountInputHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        onChange={dateInputHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseFrom;
