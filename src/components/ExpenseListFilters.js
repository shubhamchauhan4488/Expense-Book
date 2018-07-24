import React from 'react'
import {connect} from 'react-redux'
// import filters from '../reducers/filters';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';


const ExpenseListFilters = (props) => (
    <div>
        <input 
        type = "text" 
        value = {props.filters.text} 
        onChange = {(e) => {
            props.dispatch(setTextFilter(e.target.value))
        }}
        />  
        <select
        value = {props.filters.sortBy}
        onChange = {(e) => {
        if(e.target.value === 'date'){
            props.dispatch(sortByDate())
        }
        else if(e.target.value === 'amount'){
            props.dispatch(sortByAmount())
        }
        }}>
            <option value = "date" >Date</option>   
            <option value = "amount">Amount</option>  
        </select>
    </div>
    // option value = "date" means we are passing this value 'date' instead of 'Date'
)
const mapStateToProps = (state) => {
    console.log(state.filters)
    return {
        filters : state.filters
    }
}

const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters)
export default ConnectedExpenseListFilters