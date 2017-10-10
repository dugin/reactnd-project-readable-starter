import React from 'react';
import App from '../App';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

describe('App Component', () => {

    const app = shallow(<App/>);

    it('renders properly', () => {

        expect(toJson(app)).toMatchSnapshot();

    });
});