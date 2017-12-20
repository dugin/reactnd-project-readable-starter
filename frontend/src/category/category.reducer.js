import {FETCH_CATEGORIES} from "./category.type";

export const initialState = {
    isDone: false,
    error: null,
    categories: []
};

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES.PENDING:
            return {
                ...state,
                isDone: false,
                error: null,
            };
        case FETCH_CATEGORIES.FULFILLED:
            return {
                ...state,
                categories: [...action.payload.data.categories.map(c => c.name), 'all'],
                isDone: true,
                error: null,
            };
        case FETCH_CATEGORIES.REJECTED:
            return {
                ...state,
                error: action.payload,
                isDone: true
            };


        default :
            return state;
    }

};

