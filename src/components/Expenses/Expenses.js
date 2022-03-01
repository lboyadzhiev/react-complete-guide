import React, { useState } from 'react';
import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

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
                {filteredItems.map((item) => {
                    return <ExpenseItem key={item.id} {...item} />;
                })}
            </Card>
        </div>
    );
};

export default Expenses;
