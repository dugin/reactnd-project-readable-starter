import React, {Component} from 'react';
import Post from "../post/Post";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import './Detail.page.css';
import Comment from "../comments/Comment";
import {sortable} from "../../utils/constants";
import SortBy from "../sort-by/SortBy";

class DetailPage extends Component {

    static sortBy = 'vote score';

    componentDidMount() {


    }

    onSort = (sortBy) => {
        DetailPage.sortBy = sortBy;
        // this.props.dispatch(sortPosts(sortBy));
    };

    render() {
        const post = this.props.post;

        return (
            <div className="DetailPage  mt-3">
                <Post post={post}/>

                <div className="DetailPage__comments">
                    <div className="DetailPage__comments__title">
                        <h5>Comments</h5>
                        <SortBy selected={this.onSort} default={DetailPage.sortBy}
                                options={sortable}/>
                    </div>
                    <Comment post={post}/>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = (state, props) => {
    return {
        post: state.postReducer.posts.find(p => p.id === props.match.params.post_id),

    }
};

export default connect(mapStateToProps)(withRouter(DetailPage));