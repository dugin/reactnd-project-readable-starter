import * as constants from './constants';
import {getCategories} from "../api/readableAPI";

export const fetchCategories = () => {
    return {
        type: constants.FETCH_CATEGORIES,
        payload: getCategories()
    }
};
