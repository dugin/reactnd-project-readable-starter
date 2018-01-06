import * as api from '../api/readable.api';

import {FETCH_COMMENTS, VOTE_ON_COMMENT} from './comment.type';

export const fetchComments = (postID) => {
    return {
        type: FETCH_COMMENTS.BASE,
        payload: api.fetchComments(postID)
    }
};

export const voteOnComment = (id, voteType) => {
    return {
        type: VOTE_ON_COMMENT.BASE,
        payload: api.voteOnComment(id, voteType)
    }
};

