import React from 'react';
import App from "../App";
import {shallow} from "enzyme";

describe('App Component', () => {

    it('renders without crashing', () => {
       const app = shallow(<App/>);

       expect(app).toMatchSnapshot()

    });


});
