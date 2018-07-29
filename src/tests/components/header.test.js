// import ReactShallowRenderer  from 'react-test-renderer/shallow'
import React from "react";
import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'
import Header from '../../components/Header'
import expenses from "../../reducers/expenses";

// test("Should render Header correctly", () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />)
//     // console.log(renderer.getRenderOutput());
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// })  

test("Should render Header correctly", () => {
 const wrapper = shallow(<Header/>);
 expect(wrapper).toMatchSnapshot();
//  expect(wrapper.find('h1').text()).toBe('Expensify');
}
)