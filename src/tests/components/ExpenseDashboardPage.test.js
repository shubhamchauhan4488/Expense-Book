import React from "react";
import { shallow } from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test("Should render Header correctly", () => {
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
   //  expect(wrapper.find('h1').text()).toBe('Expensify');
   }
   )
