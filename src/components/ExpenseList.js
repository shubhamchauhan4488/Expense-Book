import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from "../selectors/expenses";

//we are exporting this separately b'cause we need an un-connected component for testing, it should not be connected to the store
export const ExpenseList = (props) => (
    <div className = "container">
        <div className = "list-header">
            <div className = "show-for-mobile">Expenses</div>
            <div className = "show-for-desktop">Expense</div>
            <div className = "show-for-desktop">Amount</div>
        </div>
        <div className = "list-content">
            {props.expenses.length === 0 ? (
                <div className = "list-item list-item--error">
                  <p>No Expenses to display</p>
                </div>
            ) : (
                props.expenses.map((expense) => {
                    return(
                        <ExpenseListItem key = {expense.id} {...expense}></ExpenseListItem>
                )
                })
            )}
        </div>
    </div>
)

//Since this is connected to the store, we will always get the latest values of the state
const mapStateToProps = (state) => {
    // console.log(state.filters)
        return {
            expenses : getVisibleExpenses(state.expenses, state.filters)
        }
    }
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList;

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses : state.expenses,
//         filters : state.filters
//     }
// })(ExpenseList)
// export default ConnectedExpenseList;

//connect() api wants us to specify wrappedComponent as connect()(WrappedComponent) here connect()(ExpenseList)

//Passing props 
//Example to the HOC like :  // ReactDOM.render(<ReturnedAuthHOC requireAuth = {true} info = "These are the details in this document"/>, document.getElementById('main-div'))
//Here we have to pass those to connect() and ConnectedExpenseList is the HOC, Now we will pass it using a callback function that returns 
//object (in key value pair) and we can select selective thing from the store 

//Now this key value pair can be accessed by the ExpenseList which was wrapped 
//const ExpenseList = (props) => (
//     <div>
//         <h3>
//             {props.expenes}
//         </h3>
//     </div>
// )



// const requireAuthentication = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.requireAuth ? (
//                 <WrappedComponent {...props}/>
//             ):
//             <p>Please login correctly to view the Info</p>}
//         </div>
//     )
// }
// const ReturnedAuthHOC = requireAuthentication(Info)
