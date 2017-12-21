import {FETCH_POSTS, FILTER_POSTS, SORT_POSTS, VOTE_ON_POST} from "./post.type";

export const initialState = {
    isDone: false,
    error: null,
    posts: []
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS.PENDING:
            return {
                ...state,
                isDone: false,
                error: null,
            };
        case FETCH_POSTS.FULFILLED:
            return {
                ...state,
                posts: action.payload.data,
                isDone: true,
                error: null,
            };
        case FETCH_POSTS.REJECTED:
            return {
                ...state,
                error: action.payload,
                isDone: true
            };


        case VOTE_ON_POST.PENDING:
            return {
                ...state,
                isDone: false,
                error: null,
            };
        case VOTE_ON_POST.FULFILLED:
            return {
                ...state,
                posts: state.posts.map(p => p.id === action.payload.data.id ? action.payload.data : p),
                isDone: true,
                error: null,
            };
        case VOTE_ON_POST.REJECTED:
            return {
                ...state,
                error: action.payload,
                isDone: true
            };


        case SORT_POSTS:
            return {
                ...state,
                sortBy: action.sortBy
            };

        case FILTER_POSTS:
            return {
                ...state,
                filterBy: action.filterBy
            };


        default :
            return state;
    }

};

