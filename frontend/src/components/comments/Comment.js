import React, {Component} from 'react';
import './Comment.css';

import Post from "../post/Post";

class Comment extends Component {


    render() {

        return (
            <div className="Comment">
                <Post post={this.props.comment}/>
            </div>
        )
    }

}

export default Comment;