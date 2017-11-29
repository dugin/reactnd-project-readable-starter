import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {categories, posts} from "./responseMock";

export const mock = new MockAdapter(axios);

export const URL = 'http://localhost:3001';

mock.onGet(URL + '/categories').reply(200, categories);

mock.onGet(URL + '/posts').reply(200, posts);


