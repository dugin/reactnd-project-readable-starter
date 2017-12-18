import * as constants from '../actions/constants';

const initialState = {
    pending: false,
    done: false,
    error: null,
    posts: [],
    filterBy: null,
    sortBy: null,
    fetched: false
};

export const postReducer = (state = initialState, action) => {

    console.log('postReducer ' +action.type);
    console.log(state);


    if (action.type.includes(constants.PENDING))
        return {
            ...state,
            ...constants.PENDING_OBJ
        };

    else if (action.type.includes(constants.REJECTED))
        return {
            ...state,
            ...constants.DONE_OBJ,
            error: action.payload
        };

    else
        switch (action.type) {

            case constants.FETCH_POSTS + constants.FULFILLED:
                return {
                    ...state,
                    ...constants.DONE_OBJ,
                    fetched: true,
                    posts: action.payload.data
                };

            case constants.ADD_POST + constants.FULFILLED:
                return {
                    ...state,
                    ...constants.DONE_OBJ,
                    posts: [...state.posts, action.payload.data]
                };

            case constants.REMOVE_POST + constants.FULFILLED:
                return {
                    ...state,
                    ...constants.DONE_OBJ,
                    posts: state.posts.filter(p => action.payload.data.id !== p.id)
                };

            case constants.EDIT_POST + constants.FULFILLED:
                return {
                    ...state,
                    ...constants.DONE_OBJ,
                    posts: state.posts.map(p => action.payload.data.id === p.id ? action.payload.data : p)
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

