import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Header from "../components/header/Header";

describe('Header Component', () => {

    const header = shallow(<Header/>);

    it('renders properly', () => {

        expect(toJson(header)).toMatchSnapshot();

    });
});