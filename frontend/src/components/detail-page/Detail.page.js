import React, {Component} from 'react';
import Post from "../post/Post";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import './Detail.page.css';
import Comment from "../comments/Comment";
import {sortable} from "../../utils/constants";
import SortBy from "../sort-by/SortBy";
import {editComment, fetchComments, sortComments} from "../../actions/comments";
import {editPost} from "../../actions/posts";
import {Loader} from "../loader/loader";
import {sort} from "../../utils/utils";

class DetailPage extends Component {

    sortBy = 'vote score';

    componentDidMount() {
        if (this.props.post)
            this.props.dispatch(fetchComments(this.props.post.id))
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isCommentFetched)
            this.props.dispatch(fetchComments(nextProps.post.id))
    }

    onSort = (sortBy) => {
        this.sortBy = sortBy;
        this.props.dispatch(sortComments(sortBy));
    };

    render() {
        const post = this.props.post;

        if (this.props.isLoading)
            return <Loader/>;

        return (
            <div className="DetailPage  mt-3">
                <Post onChangeVoteScore={(id, post) => this.props.dispatch(editPost(id, post))}
                      post={post}/>

                <div className="DetailPage__comments">
                    <div className="DetailPage__comments__title">
                        <h5>Comments</h5>
                        <SortBy selected={this.onSort} default={this.sortBy}
                                options={sortable}/>
                    </div>
                    {this.props.comments.map(c => (
                        <div className="Comment" id={c.id}>
                            <Post onChangeVoteScore={(id, comment) => this.props.dispatch(editComment(id, comment))}
                                  post={c}/>
                        </div>))}

                </div>
            </div>
        )
    }
}

export const mapStateToProps = (state, props) => {
    let {comments, sortBy, fetched} = state.commentReducer;

    if (sortBy)
        comments = sort(sortBy, comments);

    return {
        post: state.postReducer.posts.find(p => p.id === props.match.params.post_id),
        comments,
        isLoading: !state.commentReducer.done,
        isCommentFetched: fetched
    }
};

export default connect(mapStateToProps)(withRouter(DetailPage));