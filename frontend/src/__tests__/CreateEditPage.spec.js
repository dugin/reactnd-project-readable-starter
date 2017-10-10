import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import CreateEditPage from "../components/create-edit-page/CreateEdit.page";

describe('CreateEditPage Component', () => {

    const createEditPage = shallow(<CreateEditPage/>);

    it('renders properly', () => {

        expect(toJson(createEditPage)).toMatchSnapshot();

    });
});