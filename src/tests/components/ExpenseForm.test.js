import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expensesArray from '../testData/expenses'
import moment from 'moment'

test("Should render ExpenseForm Correctly", () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test("Should render ExpenseForm Correctly with expnse DATA", () => {
    const wrapper = shallow(<ExpenseForm expense = {expensesArray[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test("Should render on form submit Correctly", () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
    //simulating an event like submit, change, onClick
    //Also we have to provide the values for whatever is needed by the event, here, it's e.prevenDefault
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)

    expect(wrapper).toMatchSnapshot()
})

test("Should render on description change Correctly", () => {
    const wrapper = shallow(<ExpenseForm/>)
    const value = 'New Desctiption'
    //('input').at(0) is used b'cause there can be multiple inputs
    wrapper.find('input').at(0).simulate('change', {
        target : { value }
    })
    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test("Should render on note textarea change Correctly", () => {
    const wrapper = shallow(<ExpenseForm/>)
    const value = 'New Note'
    //('input').at(0) is used b'cause there can be multiple inputs
    wrapper.find('textarea').simulate('change', {
        target : { value }
    })
    expect(wrapper.state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test("Should render on amount change Correctly with valid Input", () => {
    const wrapper = shallow(<ExpenseForm/>)
    const value = '2134'
    //('input').at(0) is used b'cause there can be multiple inputs
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    })
    expect(wrapper.state('amount')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test("Should render on amount change Correctly with INVALID Input", () => {
    const wrapper = shallow(<ExpenseForm/>)
    const value = '2134.332'
    //('input').at(0) is used b'cause there can be multiple inputs
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    })
    expect(wrapper.state('amount')).toBe('')
    expect(wrapper).toMatchSnapshot()
})

test("Should call onsubmit with valid form submission", () => {
     //Introducing spy functions :fake functions which help us to check whether at some place a function was called or not, 
     //how many times it was called, with what arguments was it called
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense = {expensesArray[0]} onSubmit = {onSubmitSpy}/>)

    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expensesArray[0].description,
        amount :  expensesArray[0].amount,
        note : expensesArray[0].note,
        createdAt : expensesArray[0].createdAt
    })
    //comment description to see the usage of mock/spy function
})

//onDateChange is inside(a child) of SingleDatePicker
test("Should set new date on date change", () => {
    const wrapper = shallow(<ExpenseForm />)
    const now = moment()
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toBe(now)
})

test("Should set calender on focus change", () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused : true})
    expect(wrapper.state('calenderFocused')).toBe(true)
})

