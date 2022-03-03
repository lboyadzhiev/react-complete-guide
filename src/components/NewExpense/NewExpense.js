import React, { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

        setIsClicked(false);
        props.onAddExpense(expenseData);
    };

    const clickHandler = () => {
        setIsClicked(true);
    };

    const canselClickHandler = () => {
        setIsClicked(false);
    };
    return (
        <div className='new-expense'>
            {isClicked === false ? (
                <button onClick={clickHandler}>Add New Expense</button>
            ) : (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onChangeIsClick={canselClickHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
