import {
    CREATE_COMMENT, EDIT_COMMENT, FETCH_COMMENTS, REMOVE_COMMENT, SORT_COMMENTS,
    VOTE_ON_COMMENT
} from "./comment.type";

export const initialState = {
    isDoneComment: false,
    errorComment: null,
    comments: []
};

export const commentReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_COMMENTS.PENDING:
            return {
                ...state,
                isDoneComment: false,
                errorComment: null,
            };
        case FETCH_COMMENTS.FULFILLED:
            return {
                ...state,
                comments: action.payload.data,
                isDoneComment: true,
                errorComment: null,
            };
        case FETCH_COMMENTS.REJECTED:
            return {
                ...state,
                errorComment: action.payload,
                isDoneComment: true
            };

        case VOTE_ON_COMMENT.PENDING:
            return {
                ...state,
                isDoneComment: false,
                errorComment: null,
            };
        case VOTE_ON_COMMENT.FULFILLED:
            return {
                ...state,
                comments: state.comments.map(c => c.id === action.payload.data.id ? action.payload.data : c),
                isDoneComment: true,
                errorComment: null,
            };

        case VOTE_ON_COMMENT.REJECTED:
            return {
                ...state,
                errorComment: action.payload,
                isDoneComment: true
            };

        case REMOVE_COMMENT.REJECTED:
            return {
                ...state,
                errorComment: action.payload,
                isDoneComment: true
            };

        case REMOVE_COMMENT.PENDING:
            return {
                ...state,
                isDoneComment: false,
                errorComment: null,
            };
        case REMOVE_COMMENT.FULFILLED:
            return {
                ...state,
                comments: state.comments.filter(p => p.id !== action.payload.data.id),
                isDoneComment: true,
                errorComment: null,
            };

        case CREATE_COMMENT.REJECTED:
            return {
                ...state,
                errorComment: action.payload,
                isDoneComment: true
            };

        case CREATE_COMMENT.PENDING:
            return {
                ...state,
                isDoneComment: false,
                errorComment: null,
            };
        case CREATE_COMMENT.FULFILLED:
            return {
                ...state,
                comments: [...state.comments, action.payload.data],
                isDoneComment: true,
                errorComment: null,
            };

        case EDIT_COMMENT.REJECTED:
            return {
                ...state,
                errorComment: action.payload,
                isDoneComment: true
            };

        case EDIT_COMMENT.PENDING:
            return {
                ...state,
                isDoneComment: false,
                errorComment: null,
            };
        case EDIT_COMMENT.FULFILLED:
            return {
                ...state,
                comments: state.comments.map(c => c.id === action.payload.data.id ? action.payload.data : c),
                isDoneComment: true,
                errorComment: null,
            };

        case SORT_COMMENTS:
            return {
                ...state,
                sortBy: action.sortBy
            };

        default :
            return state;
    }
};