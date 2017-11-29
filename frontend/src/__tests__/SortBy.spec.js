import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import SortBy from "../components/sort-by/SortBy";

describe('SortBy Component', () => {

    const options = ['react', 'redux', 'angular'];

    const sortBy = shallow(<SortBy selected={jest.fn()} options={options}/>);

    it('renders properly', () => {

        expect(toJson(sortBy)).toMatchSnapshot();

    });
});