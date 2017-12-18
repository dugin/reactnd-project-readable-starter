import * as constants from './constants';
import * as readableAPI from './../api/readableAPI';

export const fetchComments = (postID) => {
    return {
        type: constants.FETCH_COMMENTS,
        payload: readableAPI.getComments(postID)
    }
};

export const removeComment = (id) => {
    return {
        type: constants.REMOVE_COMMENT,
        id
    }
};

export const editComment = (id, comment) => {
    return {
        type: constants.EDIT_COMMENT,
        payload: readableAPI.editComment(id, comment)
    }
};

export const sortComments = (sortBy) => {
    return {
        type: constants.SORT_COMMENTS,
        sortBy
    }
};