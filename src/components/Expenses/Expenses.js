import React, { useState } from 'react';
import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [inputValue, setInputValue] = useState('2020');
    const filterChangeHandler = (option) => {
        setInputValue(option);
    };

    const filteredItems = props.items.filter((item) => {
        if (item.date.getFullYear() == inputValue) {
            return item;
        }
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={inputValue} onChangeOption={filterChangeHandler} />
                <ExpensesList items={filteredItems} />
            </Card>
        </div>
    );
};

export default Expenses;
