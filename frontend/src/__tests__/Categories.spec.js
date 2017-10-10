import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Categories from "../components/categories/Categories";
import '../__mocks__/axiosMock';

describe('Categories Component', () => {

    const categories = shallow(<Categories/>);

    it('renders properly', () => {

        expect(toJson(categories)).toMatchSnapshot();

    });
});