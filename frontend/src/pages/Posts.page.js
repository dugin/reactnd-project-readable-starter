import React, {PureComponent} from 'react';
import {Button, Grid} from "material-ui";
import CategoriesChips from "../category/CategoriesChips";
import {fetchCategories} from "../category/category.action";
import {connect} from "react-redux";
import Card from "../components/card/index";
import {createPost, editPost, fetchPosts, removePost, setPostToFavorite, voteOnPost} from "../post/post.action";
import {sort} from "../utils/time.helper";
import {withRouter} from "react-router-dom";
import AddIcon from 'material-ui-icons/Add';
import styled from 'styled-components';
import CreateEditModal from "./CreateEdit.modal";

const StyledAddButton = styled(Button)`
    position: fixed;
    bottom: 20px;
    right: 20px;
`;

const StyledNotFound = styled.h1`
    margin-top: 20px;
    width: 100%;
    text-align: center;
`;



class PostsPage extends PureComponent {

    state = {
        openCreateDialog: false
    };

    componentWillMount() {
        const {posts, categories} = this.props;

        categories.length === 0 && this.props.dispatch(fetchCategories());

        posts.length <= 1 && this.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location)
            this.fetchPosts(nextProps.match.params.categoryID);

    }

    getCategory(id) {
        return id && id !== 'all' ? id : '';
    }

    onCategory = category => {
        this.props.history.replace(`/${category}`);
    };


    fetchPosts(id) {
        this.props.dispatch(fetchPosts(this.getCategory(id)));
    }

    onRemove = (id) => {
        this.props.dispatch(removePost(id))
    };

    onEdit = (post) => {
        this.props.dispatch(editPost(post.id, post))
    };

    onCreate = (post) => {
        this.props.dispatch(createPost(post));
        this.setState({openCreateDialog: false})
    };


    onVote = (id, voteType) => {
        this.props.dispatch(voteOnPost(id, voteType))
    };

    setFavoritePost = (id, favorite) => {
        this.props.dispatch(setPostToFavorite(id, favorite));
    };

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
                    {posts.length > 0 ? posts.map(p => (
                        <Card
                            key={p.id}
                            info={p}
                            onRemove={this.onRemove}
                            onEdit={this.onEdit}
                            onAddOrSubtract={this.onVote}
                            categories={categories}
                            onFavorite={this.setFavoritePost}

                        />
                    )) : <StyledNotFound>No posts found</StyledNotFound>}
                </Grid>
                <StyledAddButton fab color='primary' onClick={() => this.setState({openCreateDialog: true})}>
                    <AddIcon/>
                </StyledAddButton>

                <CreateEditModal
                    onClose={() => this.setState({openCreateDialog: false})}
                    onSave={this.onCreate}
                    open={this.state.openCreateDialog}
                    categories={categories.filter(c => c !== 'all')}
                />
            </Grid>
        );
    }
}

export const mapStateToProps = (state) => {
    const {categories, isDoneCategory, errorCategory} = state.categories;
    let {posts, isDonePost, errorPost, sortBy} = state.posts;

    posts = sortBy ? sort(sortBy, posts) : posts;

    return {
        categories,
        isLoading: !isDoneCategory || !isDonePost,
        error: !!errorCategory || !!errorPost,
        posts
    }
};
export default withRouter(connect(mapStateToProps)(PostsPage));