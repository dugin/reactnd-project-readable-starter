import React, {PureComponent} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {editPost, fetchPost, removePost, setPostToFavorite, voteOnPost} from "../post/post.action";
import {sortable, TYPE} from "../utils/constants";
import SelectMenu from "../components/SelectMenu";
import AddIcon from 'material-ui-icons/Add';
import styled from 'styled-components';
import {Button} from "material-ui";
import {
    createComment, editComment, fetchComments, removeComment, sortComments,
    voteOnComment
} from "../comment/comment.action";
import CreateEditModal from "./CreateEdit.modal";
import isEmpty from 'lodash/isEmpty';

import Card from "../components/card/index";
import {sort} from "../utils/time.helper";
import {fetchCategories} from "../category/category.action";

const StyledPostDetail = styled.div`
    margin-bottom: 20px;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    
    padding: 15px 10px;
    
    div{
      display: flex;
    align-items: baseline;  
    }
    
    Button{
      margin-left:  20px ;
    }
`;

class PostDetailPage extends PureComponent {

    state = {
        openCreateDialog: false
    };


    componentWillMount() {
        const {post, categories} = this.props;

        this.props.dispatch(fetchComments(this.props.match.params.postID));
        isEmpty(post) && this.props.dispatch(fetchPost(this.props.match.params.postID));
        categories.length === 0 && this.props.dispatch(fetchCategories());
    }

    onSort = (sortBy) => {
        this.props.dispatch(sortComments(sortBy))
    };

    onRemovePost = (id) => {
        this.props.dispatch(removePost(id));
        this.props.history.replace('/');
    };

    onEditPost = (post) => {
        this.props.dispatch(editPost(post.id, post));
    };


    onVotePost = (id, voteType) => {
        this.props.dispatch(voteOnPost(id, voteType))
    };
    onRemoveComment = (id) => {
        this.props.dispatch(removeComment(id))
    };

    onVoteComment = (id, voteType) => {
        this.props.dispatch(voteOnComment(id, voteType))
    };

    onEditComment = (comment) => {
        this.props.dispatch(editComment(comment));
    };

    onCreateComment = (comment) => {
        this.props.dispatch(createComment({...comment, parentId: this.props.post.id}));
        this.setState({openCreateDialog: false})
    };

    setFavoritePost = (id, favorite) => {
        this.props.dispatch(setPostToFavorite(id, favorite));
    };

    render() {
        const {post, comments, categories} = this.props;
        return (
            <StyledPostDetail>
                <section>
                    <Card
                        info={post}
                        onRemove={this.onRemovePost}
                        onEdit={this.onEditPost}
                        onAddOrSubtract={this.onVotePost}
                        amount={comments.length}
                        type={TYPE.detail}
                        categories={categories}
                        onFavorite={this.setFavoritePost}
                    />
                </section>
                <section>
                    <StyledDiv>
                        <div>
                            <h1>Comments</h1>
                            <Button fab mini color="primary" aria-label="add"
                                    onClick={() => this.setState({openCreateDialog: true})}>
                                <AddIcon/>
                            </Button>
                        </div>
                        <SelectMenu
                            type='primary'
                            defaultValue='Sort By'
                            options={sortable.slice(0, 2)}
                            onSelect={this.onSort}
                        />

                    </StyledDiv>
                </section>
                <section>
                    {comments.map(c => (
                        <Card
                            key={c.id}
                            info={c}
                            onEdit={this.onEditComment}
                            onRemove={this.onRemoveComment}
                            onAddOrSubtract={this.onVoteComment}
                            type={TYPE.comment}/>
                    ))}
                </section>

                <CreateEditModal
                    onClose={() => this.setState({openCreateDialog: false})}
                    onSave={this.onCreateComment}
                    open={this.state.openCreateDialog}
                    type={TYPE.comment}

                />
            </StyledPostDetail>
        )
    }
}

export const mapStateToProps = (state, props) => {
    let {posts, isDonePost, errorPost} = state.posts;
    let {comments, isDoneComment, errorComment, sortBy} = state.comments;
    const {categories, isDoneCategory, errorCategory} = state.categories;

    comments = sortBy ? sort(sortBy, comments) : comments;

    return {
        isLoading: !isDonePost || !isDoneComment || !isDoneCategory,
        error: !!errorPost || !!errorComment || !!errorCategory,
        post: posts.find(p => p.id === props.match.params.postID) || {},
        comments,
        categories
    }
};

export default withRouter(connect(mapStateToProps)(PostDetailPage));

