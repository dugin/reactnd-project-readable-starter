import * as api from '../api/readable.api';
import {FETCH_CATEGORIES} from "./category.type";

export const fetchCategories = () => {
    return {
        type: FETCH_CATEGORIES.BASE,
        payload: api.fetchCategories()
    }
};