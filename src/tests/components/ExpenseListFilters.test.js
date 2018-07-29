import React from 'react';
import { shallow } from "enzyme";
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../testData/filters'
import moment from "moment";

let wrapper, setTextFilterSpy, setStartDateSpy, setEndDateSpy, sortByDateSpy, sortByAmountSpy;


//THE REAL WORTH OF FUNCTIONS LIKE 'beforeEach'
beforeEach(()=> {
    setTextFilterSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters = {filters}
        setTextFilter = {setTextFilterSpy}
        setStartDate  = {setStartDateSpy}
        setEndDate = {setEndDateSpy}
        sortByDate = {sortByDateSpy}
        sortByAmount = {sortByAmountSpy}
        />)
})

test("Should render expenseListFilters ", ()=>{
    expect(wrapper).toMatchSnapshot()
})

test("Should render expenseListFilters with alt filters", ()=>{
    //Changing the props using setProps from enzyme
    wrapper.setProps({
        filters : altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test("Should handle text change", ()=>{
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target : { value }
    })
    // target : { value }  it is neccessary to keep the name as 'value' b'cause by doing so we are refering to e.target.value
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value)
    expect(wrapper).toMatchSnapshot()
})
test("Should handle sortBy date", ()=>{
    const value = 'date'
    
    wrapper.find('select').simulate('change', {
        target : { value }
    })
    // target : { value }  it is neccessary to keep the name as 'value' b'cause by doing so we are refering to e.target.value
    expect(sortByDateSpy).toHaveBeenCalled()
    expect(wrapper).toMatchSnapshot()
})
test("Should handle sortBy amount", ()=>{
    const value = 'amount'
    wrapper.setProps({
        filters : altFilters
    })
    wrapper.find('select').simulate('change', {
        target : { value }
    })
    expect(sortByAmountSpy).toHaveBeenCalled()
})

test("Should handle date changes", ()=>{
    const startDate = moment(0).add(4,'years')
    const endDate = moment(0).add(6,'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate)
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate)
})

test("Should handle date focus change", ()=>{
    const calenderFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})