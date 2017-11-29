import * as constants from './constants';
import * as readableAPI from "../api/readableAPI";

export const fetchPosts = () => {
    return {
        type: constants.FETCH_POSTS,
        payload: readableAPI.getAllPosts()
    }
};

export const addPost = (post) => {
    return {
        type: constants.ADD_POST,
        payload: readableAPI.setPost(post)
    }
};

// export const removePost = (id) => {
//     return {
//         type: constants.REMOVE_POST,
//         payload: readableAPI.removePost(id)
//     }
// };

export const editPost = (id, post) => {
    return {
        type: constants.EDIT_POST,
        payload: readableAPI.editPost(id, post)
    }
};

export const sortPosts = (sortBy) => {
    return {
        type: constants.SORT_POSTS,
        sortBy
    }
};

export const filterPosts = (filterBy) => {
    return {
        type: constants.FILTER_POSTS,
        filterBy
    }
};