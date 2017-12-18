import axios from 'axios';

const configs = {
    headers: {'Authorization': 'dugin'}
};
const URL = 'http://localhost:3001';

export const getCategories = () => {
    return axios.get(`${URL}/categories`, configs)
};

export const getPosts = () => {
    return axios.get(`${URL}/posts`, configs)
};

export const getPost = (postID) => {
    return axios.get(`${URL}/posts/${postID}`, configs)
};

export const voteOnPost = (postID, voteType) => {
    return axios.post(`${URL}/posts/${postID}`, {option: voteType}, configs)
};

export const addPost = (post) => {
    return axios.post(`${URL}/posts`, post, configs)
};

export const editPost = (id, post) => {
    return axios.put(`${URL}/posts/${id}`, post, configs)
};

export const getComments = (postID) => {
    return axios.get(`${URL}/posts/${postID}/comments`, configs)
};

export const editComment = (id, comment) => {
    return axios.put(`${URL}/comments/${id}`, comment, configs)
};