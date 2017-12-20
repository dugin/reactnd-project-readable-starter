import {combineReducers} from 'redux';
import {categoriesReducer} from "./category/category.reducer";

export default combineReducers({
    categories: categoriesReducer
});
