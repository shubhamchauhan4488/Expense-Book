import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from "react-redux";
import { startAddExpense } from '../actions/expenses';


// const AddExpensePage = (props) => (
//     <div>
//     This is from AddExpensePage
//     <ExpenseForm 
//     onSubmit = {(expense) => {
//         console.log(expense)
//         props.dispatch(addExpense(expense));
//         props.history.push('/')
//     }}
//     />
//     </div>
// )
// // props.history.push('/') : to switch to pages without reloading the page
// export default connect()(AddExpensePage)

//For testing we will modify the component : New class component:
export class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        console.log(expense)
        this.props.startAddExpense(expense) //calling the addExpense inside mapDispatchToProps for dispatch handling
        this.props.history.push('/')
    }
    render(){
        return  (
            <div>
            This is from AddExpensePage
            <ExpenseForm 
            onSubmit = {this.onSubmit}
            />
            </div>
        )
    }
}

//this function wwe will use to handle the dispatch here itself, instead of handling at:
// props.dispatch(addExpense(expense));
// we do this b'cause while testing we will have to pass spy fn
// and in this case we have to pass a component in a spy fn which will come out ot be very complex
const mapDispatchToProps = (dispatch) => ({
    startAddExpense : (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
