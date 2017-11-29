import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import AddRemove from "../components/add-remove/AddRemove";

describe('AddRemove Component', () => {

    const addRemove = shallow(<AddRemove onAddOrRemove={jest.fn()} amount={1}/>);

    it('renders properly', () => {

        expect(toJson(addRemove)).toMatchSnapshot();

    });
});