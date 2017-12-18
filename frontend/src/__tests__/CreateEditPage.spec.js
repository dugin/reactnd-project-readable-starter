import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import {CreateEditPage} from "../components/create-edit-page/CreateEdit.page";
import {mock, URL} from '../__mocks__/axiosMock';

describe('CreateEditPage Component', () => {

    const props = {history: {goBack: jest.fn()}};

    let createEditPage;

    beforeEach(() => {
      //  mock.onPost(URL + '/posts').reply(200);

        createEditPage = shallow(<CreateEditPage {...props}/>);
    });


    it('renders properly', () => {

        expect(toJson(createEditPage)).toMatchSnapshot();

    });

    it('on submit', () => {
        createEditPage.instance().setPost = jest.fn();

        createEditPage.find('form')
            .simulate('submit', {
                preventDefault() {
                }
            });

        expect(createEditPage.instance().setPost).toHaveBeenCalled();
    });

    it('on addPost', async () => {

        mock.onPost(URL + '/posts').reply(200);

        await createEditPage.instance().setPost();

        expect(createEditPage.instance().props.history.goBack).toHaveBeenCalled();
    });

    it('on change category', () => {

        createEditPage.instance().onCategory('test');

        expect(createEditPage.state().category).toEqual('test');
    });



});

describe('onError Component', () => {
    mock.onPost(URL + '/posts').reply(404);

    const props = {history: {goBack: jest.fn()}};

    let createEditPage;

    beforeEach(() => {
        createEditPage = shallow(<CreateEditPage {...props}/>);


    });
    it('on post error', async () => {

        await createEditPage.instance().setPost();

        expect(createEditPage.state().error).toExist();
    });
})
