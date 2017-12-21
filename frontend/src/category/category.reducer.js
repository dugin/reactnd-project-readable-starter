import {FETCH_CATEGORIES} from "./category.type";

export const initialState = {
    isDoneCategory: false,
    errorCategory: null,
    categories: []
};

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES.PENDING:
            return {
                ...state,
                isDoneCategory: false,
                errorCategory: null,
            };
        case FETCH_CATEGORIES.FULFILLED:
            return {
                ...state,
                categories: [...action.payload.data.categories.map(c => c.name), 'all'],
                isDoneCategory: true,
                errorCategory: null,
            };
        case FETCH_CATEGORIES.REJECTED:
            return {
                ...state,
                errorCategory: action.payload,
                isDoneCategory: true
            };


        default :
            return state;
    }

};

