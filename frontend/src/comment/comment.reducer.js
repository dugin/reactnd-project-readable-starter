import {FETCH_COMMENTS} from "./comment.type";

export const initialState = {
    isDoneComment: false,
    errorComment: null,
    comments: [],
    comment: {}
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

        default :
            return state;
    }
};