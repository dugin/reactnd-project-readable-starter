import moment from "moment";
import * as constants from './constants';

export const sort = (sortBy, posts) => {
    switch (sortBy) {
        case constants.sortable[0]:
            return [...posts.sort((a, b) => b.voteScore - a.voteScore)];
        case constants.sortable[1]:
            return [...posts.sort((a, b) =>{
                return moment(b.timestamp).isAfter(moment(a.timestamp), 'ms')
            })];

        default:
            return [...posts];
    }
};