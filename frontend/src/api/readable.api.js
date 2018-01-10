import axios from 'axios';

const METHOD = {
    GET: 'GET',
    DELETE: 'DELETE',
    PUT: 'PUT',
    POST: 'POST',
};

export const api = {
    root: 'http://localhost:3001',
    call: async (url, method = METHOD.GET, data = {}) => {
        return await axios({
            method,
            url: `${api.root}${url}`,
            data,
            headers: {'Authorization': 'dugin'}
        })
    },

    get: async (url) => {
        return await api.call(url);
    },
    delete: async (url) => {
        return await api.call(url, METHOD.DELETE);
    },
    put: async (url, data) => {
        return await api.call(url, METHOD.PUT, data);
    },
    post: async (url, data) => {
        return await api.call(url, METHOD.POST, data);
    },

};

const fetchCategories = () => {
    return api.get(`/categories/`);
};

const fetchPosts = (category = '') => {
    if (category.length > 0)
        category = `/${category}`;

    return api.get(`${category}/posts/`);
};

const fetchComments = (postID) => {
    return api.get(`/posts/${postID}/comments`);
};

const fetchPost = (id) => {
    return api.get(`/posts/${id}`);
};

const voteOnPost = (id, voteType) => {
    return api.post(`/posts/${id}/`, {option: voteType});
};

const voteOnComment = (id, voteType) => {
    return api.post(`/comments/${id}/`, {option: voteType});
};

const removePost = (id) => {
    return api.delete(`/posts/${id}/`);
};

const createPost = (post) => {
    return api.post(`/posts`, post);
};

const editPost = (id, post) => {
    return api.put(`/posts/${id}/`, post);
};

const setPostToFavorite = (id, favorite) => {
    return api.put(`/posts/${id}/`, {favorite: !favorite});
};


const removeComment = (id) => {
    return api.delete(`/comments/${id}/`);
};

const createComment = (id, comment) => {
    return api.post(`/comments`, comment);
};

const editComment = (id, comment) => {
    return api.put(`/comments/${id}/`, comment);
};

export {
    fetchCategories,
    fetchPosts,
    fetchPost,
    voteOnPost,
    removePost,
    fetchComments,
    voteOnComment,
    removeComment,
    createComment,
    createPost,
    editComment,
    editPost,
    setPostToFavorite
}