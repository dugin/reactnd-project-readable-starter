import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Footer from "../components/footer/Footer";
import ReadablePage from "../components/readable-page/Readable.page";
import '../__mocks__/axiosMock';

describe('ReadablePage  Component', () => {

    const readablePage = shallow(<ReadablePage/>);

    it('renders properly', () => {

        expect(toJson(readablePage)).toMatchSnapshot();

    });
});