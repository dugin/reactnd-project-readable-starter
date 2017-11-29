import * as constants from '../actions/constants';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    categories: [],
};
export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.FETCH_CATEGORIES + constants.PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                categories: []
            };
        case constants.FETCH_CATEGORIES + constants.FULFILLED:
            return {
                ...state,
                fetched: true,
                fetching: false,
                categories: action.payload.data.categories.map(c => c.name)
            };
        case constants.FETCH_CATEGORIES +  constants.REJECTED:
            return {
                ...state,
                fetched: true,
                fetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};