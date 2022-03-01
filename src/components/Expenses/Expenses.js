import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [inputValue, setInputValue] = useState('2020');
    const filterChangeHandler = (option) => {
        setInputValue(option);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={inputValue} onChangeOption={filterChangeHandler} />
                {props.items.map((item) => {
                    return <ExpenseItem key={item.id} {...item} />;
                })}
            </Card>
        </div>
    );
};

export default Expenses;
