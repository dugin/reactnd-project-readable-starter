import {combineReducers} from 'redux';
import {categoriesReducer} from "./category/category.reducer";
import {postsReducer} from "./post/post.reducer";
import {commentReducer} from "./comment/comment.reducer";

export default combineReducers({
    categories: categoriesReducer,
    posts: postsReducer,
    comments: commentReducer
});
