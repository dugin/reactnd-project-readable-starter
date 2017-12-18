import React, {Component} from 'react';
import Categories from "../categories/Categories";
import SortBy from "../sort-by/SortBy";
import Post from "../post/Post";
import PlusRound from 'react-icons/lib/io/plus-round';
import './Readable.page.css';
import {Link} from 'react-router-dom';
import {sortable} from "../../utils/constants";
import {connect} from 'react-redux';
import {sortPosts, filterPosts, editPost} from "../../actions/posts";
import {sort} from "../../utils/utils";

class ReadablePage extends Component {

    static sortBy = 'vote score';

    componentDidMount() {
        const category = this.props.match.params.category;

        if (category)
            this.onFilter(category);
    }

    onSort = (sortBy) => {
        ReadablePage.sortBy = sortBy;
        this.props.dispatch(sortPosts(sortBy));
    };

    onFilter = (filterBy) => {
        this.props.dispatch(filterPosts(filterBy));
        this.onSort(ReadablePage.sortBy);
        this.props.history.replace(filterBy);
    };

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

    render() {
        return (
            <div className="ReadablePage">
                <Categories selected={(f) => this.onFilter(f)}/>
                <SortBy selected={this.onSort} default={ReadablePage.sortBy}
                        options={sortable}/>
                {this.props.posts && this.props.posts.map(p => (
                    <Post key={p.id}
                          onChangeVoteScore={(id, post) => this.props.dispatch(editPost(id, post))}
                          post={p}/>
                ))}
                <div className="ReadablePage__add">
                    <Link to="/create" className="btn ReadablePage__add--btn rounded-circle btn-success">
                        <PlusRound size={25}/>
                    </Link>
                </div>
            </div>
        )
    }
}


export const mapStateToProps = (store) => {
    let {filterBy, posts, sortBy} = store.postReducer;

    if (filterBy)
        posts = posts.filter(p => p.category.localeCompare(filterBy) === 0 || filterBy.localeCompare('all') === 0);

    if (sortBy)
        posts = sort(sortBy, posts);

    return {
        posts
    };
};

export default connect(mapStateToProps)(ReadablePage);