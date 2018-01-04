import React, {PureComponent} from 'react';
import {Grid} from "material-ui";
import CategoriesChips from "../category/CategoriesChips";
import {fetchCategories} from "../category/category.action";
import {connect} from "react-redux";
import Post from "../post/Post";
import {fetchPosts} from "../post/post.action";
import {sort} from "../utils/time.helper";
import {withRouter} from "react-router-dom";


class PostsPage extends PureComponent {

    componentWillMount() {
        this.props.dispatch(fetchCategories());

        this.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location)
            this.fetchPosts(nextProps.match.params.categoryID);
    }

    getCategory(id) {
        return id && id !== 'all' ? id : '';
    }

    onCategory = category => {
        this.props.history.replace(`/category/${category}`);
    };


    fetchPosts(id) {
        this.props.dispatch(fetchPosts(this.getCategory(id)));
    }

    render() {
        const {categories, posts} = this.props;

        return (
            <Grid container>

                <Grid item xs={12}>
                    <CategoriesChips
                        onSelect={this.onCategory}
                        categories={categories}/>
                </Grid>

                <Grid item xs={12}>
                    {posts.map(p => <Post key={p.id} post={p}/>)}
                </Grid>
            </Grid>
        );
    }
}

export const mapStateToProps = (state) => {
    const {categories, isDoneCategory, errorCategory} = state.categories;
    let {posts, isDonePost, errorPost, filterBy, sortBy} = state.posts;

    posts = sortBy ? sort(sortBy, posts) : posts;

    return {
        categories,
        isLoading: !isDoneCategory || !isDonePost,
        error: !!errorCategory || !!errorPost,
        posts
    }
};
export default withRouter(connect(mapStateToProps)(PostsPage));