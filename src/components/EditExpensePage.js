import React from 'react';
import ExpenseForm from './ExpenseForm'
import { startEditExpense } from '../actions/expenses';
import { connect } from 'react-redux'
import { startRemoveExpense  } from '../actions/expenses'

export class EditExpensePage extends React.Component{
    onSubmit = (expense) => {
            this.props.startEditExpense(this.props.expense.id, expense)
            this.props.history.push('/')
        }
    onRemove = () => {
        this.props.startRemoveExpense(this.props.expense.id)
        this.props.history.push('/')
    }
    render(){
        return (
            <div>  
            <ExpenseForm 
            expense = {this.props.expense}
            onSubmit = {this.onSubmit}/>
            <button onClick = {this.onRemove}>Remove</button>
            </div>
        )
    }
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
const mapDispatchToProps = (dispatch, props) => ({
    startRemoveExpense : (data) =>  {dispatch(startRemoveExpense(data))},
    startEditExpense : (id, expense) => {dispatch(startEditExpense(id, expense))}
})
   

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);