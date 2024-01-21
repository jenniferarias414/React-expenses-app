import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'


function ExpenseItem(props){
    // const [title, setTitle] = useState(props.title);

    // let title = props.title;

    // function clickHandler(){
    //     setTitle('Updated');
    //     // title = 'updated';
    // };
   

    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
    );
}

export default ExpenseItem;