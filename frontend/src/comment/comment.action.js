import * as api from "../api/readable.api";

import {
  FETCH_COMMENTS,
  VOTE_ON_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  CREATE_COMMENT,
  SORT_COMMENTS
} from "./comment.type";
import { sortable } from "../utils/constants";

export const fetchComments = postID => {
  return {
    type: FETCH_COMMENTS.BASE,
    payload: api.fetchComments(postID)
  };
};

export const voteOnComment = (id, voteType) => {
  return {
    type: VOTE_ON_COMMENT.BASE,
    payload: api.voteOnComment(id, voteType)
  };
};

export const removeComment = id => {
  return {
    type: REMOVE_COMMENT.BASE,
    payload: api.removeComment(id)
  };
};

export const createComment = comment => {
  return {
    type: CREATE_COMMENT.BASE,
    payload: api.createComment(comment.id, comment)
  };
};

export const editComment = comment => {
  return {
    type: EDIT_COMMENT.BASE,
    payload: api.editComment(comment.id, comment)
  };
};

export const sortComments = (sortBy = sortable[0]) => {
  return {
    type: SORT_COMMENTS,
    sortBy
  };
};
