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

export const getPost = (postID) => {
    return axios.get(`${URL}/posts/${postID}`, configs)
};

export const voteOnPost = (postID, voteType) => {
    return axios.post(`${URL}/posts/${postID}`, {option: voteType}, configs)
};

export const setPost = (post) => {
    return axios.post(`${URL}/posts`, post, configs)
};

export const editPost = (id, post) => {
    return axios.put(`${URL}/posts/${id}`, post, configs)
};