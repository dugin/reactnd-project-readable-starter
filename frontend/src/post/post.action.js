import * as api from '../api/readable.api';
import {FETCH_POSTS, SORT_POSTS, VOTE_ON_POST} from "./post.type";

export const fetchPosts = () => {
    return {
        type: FETCH_POSTS.BASE,
        payload: api.fetchPosts()
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
