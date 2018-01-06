import {FETCH_POSTS, FETCH_POST,  REMOVE_POST, SORT_POSTS, VOTE_ON_POST} from "./post.type";

export const initialState = {
    isDonePost: false,
    errorPost: null,
    posts: [],
    post: {}
};

export const postsReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_POSTS.PENDING:
            return {
                ...state,
                isDonePost: false,
                errorPost: null,
            };
        case FETCH_POSTS.FULFILLED:
            return {
                ...state,
                posts: action.payload.data,
                isDonePost: true,
                errorPost: null,
            };
        case FETCH_POSTS.REJECTED:
            return {
                ...state,
                errorPost: action.payload,
                isDonePost: true
            };

        case FETCH_POST.PENDING:
            return {
                ...state,
                isDonePost: false,
                errorPost: null,
            };
        case FETCH_POST.FULFILLED:
            return {
                ...state,
                post: action.payload.data,
                isDonePost: true,
                errorPost: null,
            };
        case FETCH_POST.REJECTED:
            return {
                ...state,
                errorPost: action.payload,
                isDonePost: true
            };

        case VOTE_ON_POST.PENDING:
            return {
                ...state,
                isDonePost: false,
                errorPost: null,
            };
        case VOTE_ON_POST.FULFILLED:
            return {
                ...state,
                posts: state.posts.map(p => p.id === action.payload.data.id ? action.payload.data : p),
                isDonePost: true,
                errorPost: null,
            };

        case VOTE_ON_POST.REJECTED:
            return {
                ...state,
                errorPost: action.payload,
                isDonePost: true
            };

        case REMOVE_POST.REJECTED:
            return {
                ...state,
                errorPost: action.payload,
                isDonePost: true
            };

        case REMOVE_POST.PENDING:
            return {
                ...state,
                isDonePost: false,
                errorPost: null,
            };
        case REMOVE_POST.FULFILLED:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload.data.id),
                isDonePost: true,
                errorPost: null,
            };

        case SORT_POSTS:
            return {
                ...state,
                sortBy: action.sortBy
            };

        default :
            return state;
    }

};

