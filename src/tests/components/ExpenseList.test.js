import React from 'react'
import {ExpenseList}  from "../../components/ExpenseList";
import {shallow} from 'enzyme'
import expensesArray from "../testData/expenses";

test("should correctly render Expense LIst with given expenses", () => {
    const wrapper = shallow(<ExpenseList expenses = {expensesArray}/>);
    expect(wrapper).toMatchSnapshot()
})

test("should correctly render Expense LIst with NO expenses PASSED", () => {
    const wrapper = shallow(<ExpenseList expenses = {[]}/>);
    expect(wrapper).toMatchSnapshot()
})

