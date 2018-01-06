import React, {PureComponent} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {fetchPost} from "../post/post.action";
import {sortable} from "../utils/constants";
import SelectMenu from "../components/SelectMenu";
import AddIcon from 'material-ui-icons/Add';
import styled from 'styled-components';
import {Button} from "material-ui";
import {fetchComments} from "../comment/comment.action";

import Card from "../components/card/index";

const StyledPostDetail = styled.div`
    background-color: white;
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

    componentDidMount() {
        this.props.dispatch(fetchPost(this.props.match.params.postID));
        this.props.dispatch(fetchComments(this.props.match.params.postID));
    }

    onSort = () => {

    };

    render() {
        const {post, comments} = this.props;
        return (
            <StyledPostDetail>
                <section>
                    <Card post={post} amount={comments.length} type='detail'/>
                </section>
                <section>
                    <StyledDiv>
                        <div>
                            <h1>Comments</h1>
                            <Button fab mini color="primary" aria-label="add">
                                <AddIcon/>
                            </Button>
                        </div>
                        <SelectMenu
                            type='primary'
                            defaultValue='Sort By'
                            options={sortable}
                            onSelect={this.onSort}
                        />

                    </StyledDiv>
                </section>
                <section>
                    {comments.map(c => <Card key={c.id} type='comment'  post={c}/>)}
                </section>
            </StyledPostDetail>
        )
    }
}

export const mapStateToProps = (state) => {
    let {post, isDonePost, errorPost} = state.posts;
    let {comments, isDoneComment, errorComment} = state.comments;


    return {
        isLoading: !isDonePost && !isDoneComment,
        error: !!errorPost && !!errorComment,
        post,
        comments
    }
};

export default withRouter(connect(mapStateToProps)(PostDetailPage));

