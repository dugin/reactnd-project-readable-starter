import moment from "moment";

export const sort = (sortBy, posts) => {
    switch (sortBy) {
        case 'vote score':
            return [...posts.sort((a, b) => b.voteScore - a.voteScore)];
        case 'created at':
            return [...posts.sort((a, b) => moment(b.timestamp).isAfter(moment(a.timestamp), 's'))];

        default:
            return [...posts];
    }
};