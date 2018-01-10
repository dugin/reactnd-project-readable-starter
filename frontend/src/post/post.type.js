import {createActionSet} from "../utils/action.helper";

export const FETCH_POSTS = createActionSet('FETCH_POSTS');
export const FETCH_POST = createActionSet('FETCH_POST');

export const VOTE_ON_POST = createActionSet('VOTE_ON_POST');
export const REMOVE_POST = createActionSet('REMOVE_POST');

export const CREATE_POST = createActionSet('CREATE_POST');
export const EDIT_POST = createActionSet('EDIT_POST');

export const SET_TO_FAVORITE = createActionSet('SET_TO_FAVORITE');


export const SORT_POSTS = 'SORT_POSTS';

