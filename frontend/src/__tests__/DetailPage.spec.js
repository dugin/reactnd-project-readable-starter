import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import DetailPage from "../components/detail-page/Detail.page";

describe('DetailPage Component', () => {

    const detailPage = shallow(<DetailPage/>);

    it('renders properly', () => {

        expect(toJson(detailPage)).toMatchSnapshot();

    });
});