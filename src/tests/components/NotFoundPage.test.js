import React from "react";
import { shallow } from 'enzyme'
import NotFoundPage from '../../components/NotFoundPage'

test("Should render Header correctly", () => {
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();
   //  expect(wrapper.find('h1').text()).toBe('Expensify');
   }
   )
