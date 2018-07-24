import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from "react-redux";
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
    This is from AddExpensePage
    <ExpenseForm 
    onSubmit = {(expense) => {
        console.log(expense)
        props.dispatch(addExpense(expense));
        props.history.push('/')
    }}
    />
    </div>
)

// props.history.push('/') : to switch to pages without reloading the page

export default connect()(AddExpensePage)