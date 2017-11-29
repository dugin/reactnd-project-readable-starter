import * as constants from './constants';

export const addComment = (comment) => {
    return {
        type: constants.ADD_COMMENT,
        comment
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
        comment,
        id
    }
};