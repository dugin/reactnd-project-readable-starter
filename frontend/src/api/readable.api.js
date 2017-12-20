import axios from 'axios';

const METHOD = {
    GET: 'GET',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    POST: 'POST',
};

export const api = {
    root: 'http://localhost:3001/',
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
    patch: async (url, data) => {
        return await api.call(url, METHOD.PATCH, data);
    },
    post: async (url, data) => {
        return await api.call(url, METHOD.POST, data);
    },

};


export const fetchCategories = () => {
    return api.get('categories');
};

