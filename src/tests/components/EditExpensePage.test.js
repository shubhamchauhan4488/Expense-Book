import React from "react";
import expensesArray from '../testData/expenses'
import { shallow } from 'enzyme'
import { EditExpensePage }from "../../components/EditExpensePage";

//refer to jest globals : increases reusbalility of code
let startRemoveExpenseSpy, startEditExpenseSpy, historySpy, wrapper
//this will be callled before every test case is called for expect
beforeEach(() => {
    startEditExpenseSpy = jest.fn();
     startRemoveExpenseSpy = jest.fn();
     historySpy = { push : jest.fn() }; //here history is an object , push is the spy
     wrapper = shallow(<EditExpensePage 
        startEditExpense = {startEditExpenseSpy} 
        startRemoveExpense = {startRemoveExpenseSpy} 
        history = {historySpy}
        expense = {expensesArray[2]}
        />)
})

test("should render edit expense page correctly", ()=>{
    expect(wrapper).toMatchSnapshot()
})

test("should handle edit expense correctly", ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expensesArray[2])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expensesArray[2].id, expensesArray[2])
    expect(wrapper).toMatchSnapshot()
})


test("should handle remove expense correctly", ()=>{
    wrapper.find('button').simulate('click')
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(expensesArray[2].id)
    expect(wrapper).toMatchSnapshot()
})

    // test("should run onSubmit correctly", ()=>{
    //     wrapper.find('ExpenseForm').prop('onSubmit')(expensesArray[1]);
    //     expect(historySpy.push).toHaveBeenLastCalledWith('/')
    //     expect(addExpenseSpy).toHaveBeenLastCalledWith(expensesArray[1])
    //     expect(wrapper).toMatchSnapshot()
    // })