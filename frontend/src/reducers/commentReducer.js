import * as constants from '../actions/constants';

const initialState = {
    pending: false,
    done: false,
    error: null,
    comments: [],
    sortBy: null,
    fetched: false
};

export const commentReducer = (state = initialState, action) => {

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

            case constants.FETCH_COMMENTS + constants.FULFILLED:
                return {
                    ...state,
                    ...constants.DONE_OBJ,
                    fetched: true,
                    comments: action.payload.data
                };

            case constants.ADD_COMMENT + constants.FULFILLED:
                return {
                    ...state,
                    ...constants.DONE_OBJ,
                    comments: [...state.comments, action.payload.data]
                };

            case constants.REMOVE_COMMENT + constants.FULFILLED:
                return {
                    ...state,
                    ...constants.DONE_OBJ,
                    comments: state.comments.filter(c => action.payload.data.id !== c.id)
                };

            case constants.EDIT_COMMENT + constants.FULFILLED:
                return {
                    ...state,
                    ...constants.DONE_OBJ,
                    comments: state.comments.map(c => action.payload.data.id === c.id ? action.payload.data : c)
                };

            case constants.SORT_POSTS:
                return {
                    ...state,
                    sortBy: action.sortBy
                };


            default:
                return state;
        }
};