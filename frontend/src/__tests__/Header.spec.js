import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import {Header} from "../components/header/Header";

describe('Header Component', () => {

    const props = {history: {goBack: jest.fn(), location: {pathname: '/any'}}};

    const header = shallow(<Header {...props}/>);

    it('renders properly', () => {
        expect(toJson(header)).toMatchSnapshot();
    });

    it('go back', () => {
        header.find('.Header__back-btn').simulate('click');

        expect(header.instance().props.history.goBack).toHaveBeenCalled();
    });

    it('received props', () => {
        header.setProps({history: {goBack: jest.fn(), location: {pathname: '/test'}}});

        expect(header.instance().state.page).toEqual('/test');
    });
});