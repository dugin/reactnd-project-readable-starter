import * as constants from '../actions/constants';

const initialState = {
    pending: false,
    done: false,
    error: null,
    posts: [],
    filterBy: null,
    sortBy: null
};

export const postReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.FETCH_POSTS + constants.PENDING:
            return {
                ...state,
                ...constants.PENDING_OBJ
            };
        case constants.FETCH_POSTS + constants.FULFILLED:
            return {
                ...state,
                ...constants.PENDING_OBJ,
                posts: action.payload.data
            };
        case constants.FETCH_POSTS + constants.REJECTED:
            return {
                ...state,
                ...constants.PENDING_OBJ,
                error: action.payload
            };

        case constants.ADD_POST + constants.PENDING:
            return {
                ...state,
                ...constants.PENDING_OBJ
            };
        case constants.ADD_POST + constants.FULFILLED:
            return {
                ...state,
                ...constants.PENDING_OBJ,
                posts: [...state.posts, action.payload.data]
            };
        case constants.ADD_POST + constants.REJECTED:
            return {
                ...state,
                ...constants.PENDING_OBJ,
                error: action.payload
            };

        case constants.REMOVE_POST + constants.PENDING:
            return {
                ...state,
                ...constants.PENDING_OBJ
            };
        case constants.REMOVE_POST + constants.FULFILLED:
            return {
                ...state,
                ...constants.PENDING_OBJ,
                posts: state.posts.filter(p => action.payload.data.id !== p.id)
            };
        case constants.REMOVE_POST + constants.REJECTED:
            return {
                ...state,
                ...constants.PENDING_OBJ,
                error: action.payload
            };

        case constants.EDIT_POST + constants.PENDING:
            return {
                ...state,
                ...constants.PENDING_OBJ,
            };
        case constants.EDIT_POST + constants.FULFILLED:
            return {
                ...state,
                ...constants.PENDING_OBJ,
                posts: state.posts.map(p => action.payload.data.id === p.id ? action.payload.data : p)
            };
        case constants.EDIT_POST + constants.REJECTED:
            return {
                ...state,
                ...constants.PENDING_OBJ,
                error: action.payload
            };
        case constants.SORT_POSTS:
            return {
                ...state,
                sortBy: action.sortBy
            };

        case constants.FILTER_POSTS:
            return {
                ...state,
                filterBy: action.filterBy
            };

        default:
            return state;
    }
};

