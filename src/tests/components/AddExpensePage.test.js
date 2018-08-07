import React from "react";
import expensesArray from '../testData/expenses'
import { shallow } from 'enzyme'
import { AddExpensePage }from "../../components/AddExpensePage";


//refer to jest globals : increases reusbalility of code
let startAddExpenseSpy, historySpy, wrapper
//this will be callled before every test case is called for expect
beforeEach(() => {
    startAddExpenseSpy = jest.fn();
     historySpy = { push : jest.fn() };
     wrapper = shallow(<AddExpensePage startAddExpense = {startAddExpenseSpy} history = {historySpy} />)
})

test("should render expense page correctly", ()=>{
    expect(wrapper).toMatchSnapshot()
})

test("should run onSubmit correctly", ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expensesArray[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpenseSpy).toHaveBeenLastCalledWith(expensesArray[1])
    expect(wrapper).toMatchSnapshot()
})

