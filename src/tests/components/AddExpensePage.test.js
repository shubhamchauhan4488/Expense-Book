import React from "react";
import expensesArray from '../testData/expenses'
import { shallow } from 'enzyme'
import { AddExpensePage }from "../../components/AddExpensePage";


//refer to jest globals : increases reusbalility of code
let addExpenseSpy, historySpy, wrapper
//this will be callled before every test case is called for expect
beforeEach(() => {
     addExpenseSpy = jest.fn();
     historySpy = { push : jest.fn() };
     wrapper = shallow(<AddExpensePage addExpense = {addExpenseSpy} history = {historySpy} />)
})

test("should render expense page correctly", ()=>{
    expect(wrapper).toMatchSnapshot()
})

test("should run onSubmit correctly", ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expensesArray[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expensesArray[1])
    expect(wrapper).toMatchSnapshot()
})

