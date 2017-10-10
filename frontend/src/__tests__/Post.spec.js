import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Post from "../components/post/Post";
import {posts} from "../__mocks__/responseMock";

describe('Post Component', () => {

    const post = shallow(<Post post={posts[0]}/>);

    it('renders properly', () => {

        expect(toJson(post)).toMatchSnapshot();

    });
});