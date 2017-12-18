import React, {Component} from 'react';
import './Post.css';
import IosComposeOutline from 'react-icons/lib/io/ios-compose-outline';
import IosPersonOutline from 'react-icons/lib/io/ios-person-outline';
import Trophy from 'react-icons/lib/io/trophy';
import Edit from 'react-icons/lib/io/edit';
import moment from 'moment';
import AddRemove from "../add-remove/AddRemove";
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import PostActions from "../post-actions/PostActions";

class Post extends Component {



    constructor(props) {
        super(props);
    }

    setDate = () => {
        return moment(this.props.post.timestamp).format('MMM DD, YYYY - h:mm a');
    };

    onChangeVoteScore = (voteType, quantity) => {
        this.props.onChangeVoteScore(this.props.post.id, {...this.props.post, voteScore: quantity});
    };

    render() {
        return (
            <div className="Post">

                <div className="Post__edit">
                    <PostActions post={ this.props.post}/>
                </div>

                <div className="Post__main">
                    <div>
                        <div className="Post__main__score">
                            <Trophy size={25}/>
                            {this.props.post.voteScore}
                        </div>
                        <div>
                            <AddRemove
                                onAddOrRemove={(voteType, quantity) => this.onChangeVoteScore(voteType, quantity)}
                                amount={this.props.post.voteScore}/>
                        </div>
                    </div>
                    <div className="Post__main__info">
                        <Link to={this.props.post.category + '/' + this.props.post.id}
                              className="Post__main__info__title">  {this.props.post.title}</Link>
                        <h3 className="Post__main__info__body"> {this.props.post.body}</h3>
                        <p className="Post__main__info__createdAt"><IosComposeOutline size={20}/>{this.setDate()}</p>

                        <div className="Post__more">
                            <div><IosPersonOutline size={25}/>{this.props.post.author}</div>
                            <div className="badge badge-pill badge-secondary">{this.props.post.category}</div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    onChangeVoteScore: PropTypes.func.isRequired
};

export default Post;