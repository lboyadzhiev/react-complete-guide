import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseForm from '../NewExpense/ExpenseForm';

const Expenses = (props) => {
    const [inputValue, setInputValue] = useState('2020');
    const saveFilterData = (data) => {
        setInputValue(data);
    };

    return (
        <div>
            <ExpensesFilter onSaveFilterData={saveFilterData} />
            <Card className='expenses'>
                {props.items.map((item) => {
                    return <ExpenseItem key={item.id} {...item} />;
                })}
            </Card>
        </div>
    );
};

export default Expenses;
