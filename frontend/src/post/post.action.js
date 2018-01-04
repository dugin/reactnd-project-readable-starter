import * as api from '../api/readable.api';
import {FETCH_POSTS, REMOVE_POST, SORT_POSTS, VOTE_ON_POST} from "./post.type";

export const fetchPosts = (category) => {
    return {
        type: FETCH_POSTS.BASE,
        payload: api.fetchPosts(category)
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
