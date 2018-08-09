// import ReactShallowRenderer  from 'react-test-renderer/shallow'
import React from "react";
import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'
import {Header} from '../../components/Header'

// test("Should render Header correctly", () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />)
//     // console.log(renderer.getRenderOutput());
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// })  

test("Should render Header correctly", () => {
 const wrapper = shallow(<Header startLogout={() => { }} />);
 expect(wrapper).toMatchSnapshot();
//  expect(wrapper.find('h1').text()).toBe('Expensify');
}
)

//Now the header also has Logout button, including tests for that
test("Should call the startLogout on button click", () => {
    const startLogoutSpy =  jest.fn()
    const wrapper = shallow(<Header startLogout={startLogoutSpy} />);;
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toHaveBeenCalled();
})