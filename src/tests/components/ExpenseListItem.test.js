import React from 'react'
import  {ExpenseListItem} from "../../components/ExpenseListItem";
import {shallow} from 'enzyme'
import expensesArray from "../testData/expenses";

test("should correctly render ExpenseListItem with expenses PASSED", () => {
    const wrapper = shallow(<ExpenseListItem {...expensesArray[0]} />);
    expect(wrapper).toMatchSnapshot()
})