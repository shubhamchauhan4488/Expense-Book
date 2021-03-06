import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from "react-redux";
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        console.log('expenses as of now',expense)
        this.props.startAddExpense(expense) //calling the addExpense inside mapDispatchToProps for dispatch handling
        this.props.history.push('/')
    }
    render(){
        return  (
            <div>
                <div className = "page-header">
                    <div className = "container">
                        <h1 className = "page-header__title" > Add Expense</h1>
                    </div>
                </div>
                <div className = "container">
                    <ExpenseForm 
                    onSubmit = {this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

//this function we will use to handle the dispatch here itself, instead of handling at:
// props.dispatch(addExpense(expense));
// we do this b'cause while testing we will have to pass spy fn
// and in this case we have to pass a component in a spy fn which will come out ot be very complex
const mapDispatchToProps = (dispatch) => ({
    startAddExpense : (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
