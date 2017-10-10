import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Footer from "../components/footer/Footer";

describe('Footer Component', () => {

    const footer = shallow(<Footer/>);

    it('renders properly', () => {

        expect(toJson(footer)).toMatchSnapshot();

    });
});