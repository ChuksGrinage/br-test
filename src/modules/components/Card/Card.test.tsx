import React from "react";
import { mount } from 'enzyme';
import Card from './Card';

let wrapped: any;

beforeEach(() => {
    wrapped = mount(<Card />);
})

describe('<Card />', () => {
    
})
it('contains a div that ha', () => {
    expect(wrapped.find('div').length).toEqual(3)
})

afterEach(() => {
    wrapped.unmount();
})