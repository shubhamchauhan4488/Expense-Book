import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment();
console.log(now.format('MMMM Do, YYYY'));

export default class ExpenseForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            description : props.expense ? props.expense.description : '',
            note : props.expense ? props.expense.note : '',
            amount : props.expense ? (props.expense.amount/100).toString() : '',
            createdAt : props.expense ? moment(props.expense.createdAt) :moment(),
            calenderFocused  : false,
            error : ''
        }
    }
    // state = {
    //     description : '',
    //     note : '',
    //     amount : '',
    //     createdAt : moment(),
    //     calenderFocused  : false,
    //     error : ''
    // }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => {
            return{
                description : description,
            }
        })
    }
    onNoteChange = (e) => {
        // e.persist();
        // this.setState(() => {
        //     return{
        //         note : e.target.value
        //     }
        // })

        // OR
        const note = e.target.value;
        this.setState(() => {
            return{
                note : note
            }
        })
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if(!amount  || amount.match(/^\d{1,}(\.\d{0,2})?$/)){ //d{1,} will prevent us from entering numbers 0 to 1 i.e 0.122
            this.setState(() => {
                return {
                    amount : amount
                }
            })
        }
    }
    onDateChange = (createdAt) => {
        this.setState(() => {
            if(createdAt){
                return {
                    createdAt : createdAt
                }
            }   
        })
    }
    onFocusChange = ({focused}) => {
        this.setState(() => {
            return{
                calenderFocused : focused
            }
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(() => {
                return {
                    error : 'Please enter both description and amount'
                }
            })
        }else{
            this.setState(() => {
                return {
                    error : ''
                }
            })
            console.log("error cleared")
        //accessing the onSubmit function which is passed as props from <addexpense> and 
        //passing the new expense to the <Addexpense> so that it can be added to redux store
        this.props.onSubmit({
                description : this.state.description,
                amount : (parseFloat(this.state.amount, 10))*100,
                note : this.state.note,
                createdAt : this.state.createdAt.valueOf()
            })
       
    }
}
    

    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit = {this.onSubmit}>
            <input
            type = "text"
            placeholder = 'Description'
            autoFocus
            value = {this.state.description}
            onChange = {this.onDescriptionChange}
            />
            <input
            type = 'text'
            placeholder = 'Amount'
            value = {this.state.amount}
            onChange = {this.onAmountChange}
            >
            </input>
            <SingleDatePicker 
            date = {this.state.createdAt}
            onDateChange={this.onDateChange}
            focused = {this.state.calenderFocused}
            onFocusChange = {this.onFocusChange}
            numberOfMonths = {1}
            isOutsideRange = {() => false}/>
            <textarea 
            placeholder = "Add a note for this expense (optional)"
            value = {this.note}
            onChange = {this.onNoteChange}
            ></textarea>
            <button>Add Expnse</button>
            </form>

            </div>
        )
    }
    // isOutsideRange = {() => false} takes day as an argument, but we want to show every day so we just return false
    //numberOfMonths = {1} means how many months u want to show on the datepicker
}