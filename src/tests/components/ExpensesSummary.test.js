import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from '../../components/ExpensesSummary'
// import ExpenseArray from '../testData/expenses'

test("should render ExpenseSummary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {123}/>)
    expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseSummary with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary  expenseCount = {32} expensesTotal = {12324324}/>)
    expect(wrapper).toMatchSnapshot()
})