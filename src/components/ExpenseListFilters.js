import React from 'react'
import {connect} from 'react-redux'
// import filters from '../reducers/filters';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates' 


export class ExpenseListFilters extends React.Component{
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
        console.log(e.target.value)
    }
    onSortByChange = (e) => {
        if(e.target.value === 'date'){
            this.props.sortByDate()
        }
        else if(e.target.value === 'amount'){
            this.props.sortByAmount()
        }
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused}))
    }
    state = {
        calenderFocused : null
    }
    render(){
        return(
                <div className = "container">
                    <div className =  "input-group">
                        <div className =  "input-group__item">
                            <input 
                            type = "text" 
                            className = "text-input"
                            placeholder = "Search Expenses"
                            value = {this.props.filters.text} 
                            onChange = {this.onTextChange}
                            /> 
                        </div>
                        <div className =  "input-group__item">
                            <select
                            value = {this.props.filters.sortBy}
                            className = "select"
                            onChange = {this.onSortByChange}>
                                <option value = "date" >Date</option>   
                                <option value = "amount">Amount</option>  
                            </select>
                        </div>
                        <div className =  "input-group__item">
                            <DateRangePicker 
                            startDate = {this.props.filters.startDate}
                            endDate = {this.props.filters.endDate}
                            onDatesChange = {this.onDatesChange}
                            focusedInput = {this.state.calenderFocused}
                            onFocusChange = {this.onFocusChange}
                            showClearDates = {true}
                            numberOfMonths = {1}
                            isOutsideRange = {() => false}/>
                        </div>
                    </div>                  
                </div>
                // option value = "date" means we are passing this value 'date' instead of 'Date'
            )
    }

}

const mapStateToProps = (state) => {
    console.log(state.filters)
    return {
        filters : state.filters
    }   
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter : (textValue) => {dispatch(setTextFilter(textValue))},
    sortByDate : () => dispatch(sortByDate()),
    sortByAmount : () => dispatch(sortByAmount()),
    setStartDate : (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate))
})

const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
export default ConnectedExpenseListFilters