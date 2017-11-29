import * as constants from './constants';
import {getAllCategories} from "../api/readableAPI";

export const fetchCategories = () => {
    return {
        type: constants.FETCH_CATEGORIES,
        payload: getAllCategories()
    }
};
