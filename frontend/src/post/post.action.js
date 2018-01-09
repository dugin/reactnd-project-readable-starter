import * as api from '../api/readable.api';
import {FETCH_POSTS, FETCH_POST, REMOVE_POST, SORT_POSTS, VOTE_ON_POST, CREATE_POST, EDIT_POST} from "./post.type";

export const fetchPosts = (category) => {
    return {
        type: FETCH_POSTS.BASE,
        payload: api.fetchPosts(category)
    }
};

export const fetchPost = (id) => {
    return {
        type: FETCH_POST.BASE,
        payload: api.fetchPost(id)
    }
};

export const voteOnPost = (id, voteType) => {
    return {
        type: VOTE_ON_POST.BASE,
        payload: api.voteOnPost(id, voteType)
    }
};

export const sortPosts = (sortBy) => {
    return {
        type: SORT_POSTS,
        sortBy
    }
};

export const removePost = (id) => {
    return {
        type: REMOVE_POST.BASE,
        payload: api.removePost(id)
    }
};


export const createPost = (post) => {
    return {
        type: CREATE_POST.BASE,
        payload: api.createPost(post)
    }
};


export const editPost = (id, post) => {
    return {
        type: EDIT_POST.BASE,
        payload: api.editPost(id, post)
    }
};

