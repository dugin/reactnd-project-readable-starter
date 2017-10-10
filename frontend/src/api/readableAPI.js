import axios from 'axios';

const configs = {
    headers: {'Authorization': 'dugin'}
};
const URL = 'http://localhost:3001';

export const getAllCategories = () => {

    return axios.get(`${URL}/categories`, configs)

};


export const getAllPosts = () => {

    return axios.get(`${URL}/posts`, configs)

};