import React from 'react'
import { removeExpense } from '../actions/expenses';
import {  connect } from 'react-redux'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick = {() => {
            // console.log(id)
            dispatch(removeExpense({expenseID : id})) ; 
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem) 
//we are exporting the connected component 
//but here we dont need access to the state so we can use only connect(), it will give us access to dispatch prop