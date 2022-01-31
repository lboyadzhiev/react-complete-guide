import ExpenseItem from './ExpenseItem';
import './Expenses.css';

import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {props.items.map((item) => {
                return <ExpenseItem key={item.id} {...item} />;
            })}
        </Card>
    );
};

export default Expenses;
