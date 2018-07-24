import React from 'react';
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../actions/expenses';
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
        This is from EditExpensePage and the you are looking at expense for ID : {props.match.params.id}
        <ExpenseForm 
        expense = {props.expense}
        onSubmit = {(expense) => {
            props.dispatch(editExpense(props.expense.id, expense))
            props.history.push('/')
        }}/>
        <button onClick = {() => {
            // console.log(id)
            props.dispatch(removeExpense({expenseID : props.expense.id})) ; 
            props.history.push('/')
        }}>Remove</button>
        </div>
    )
}


//below props are the ones which are passed to the HOC, 
//nd we are already aware that we can pass more props to the wrapped compoent : so that is what we will do
const mapStateToProps = (state, props) => {
    return {
        expense : state.expenses.find((expense) => {
            return props.match.params.id === expense.id
         }
        )
    }
}
   

export default connect(mapStateToProps)(EditExpensePage);