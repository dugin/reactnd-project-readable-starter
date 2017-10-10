import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import SortBy from "../components/sort-by/SortBy";

describe('SortBy Component', () => {

    const sortBy = shallow(<SortBy/>);

    it('renders properly', () => {

        expect(toJson(sortBy)).toMatchSnapshot();

    });
});