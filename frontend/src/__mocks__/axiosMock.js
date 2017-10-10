import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {categories, posts} from "./responseMock";

const mock = new MockAdapter(axios);

const URL = 'http://localhost:3001';

mock.onGet(URL + '/categories').reply(200, categories);

mock.onGet(URL + '/posts').reply(200, posts);
