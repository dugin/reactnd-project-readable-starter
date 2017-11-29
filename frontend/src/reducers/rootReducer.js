import {combineReducers} from 'redux';
import {postReducer} from "./postReducer";
import {commentReducer} from "./commentReducer";
import {categoryReducer} from "./categoriesReducer";

export default combineReducers({
    postReducer,
    commentReducer,
    categoryReducer
});
