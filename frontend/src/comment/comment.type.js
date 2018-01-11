import { createActionSet } from "../utils/action.helper";

export const FETCH_COMMENTS = createActionSet("FETCH_COMMENTS");
export const VOTE_ON_COMMENT = createActionSet("VOTE_ON_COMMENT");

export const REMOVE_COMMENT = createActionSet("REMOVE_COMMENT");

export const CREATE_COMMENT = createActionSet("CREATE_COMMENT");
export const EDIT_COMMENT = createActionSet("EDIT_COMMENT");

export const SORT_COMMENTS = "SORT_COMMENTS";
