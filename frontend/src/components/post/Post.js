import React, {Component} from 'react';
import './Post.css';
import IosComposeOutline from 'react-icons/lib/io/ios-compose-outline';
import IosPersonOutline from 'react-icons/lib/io/ios-person-outline';
import Trophy from 'react-icons/lib/io/trophy';
import Edit from 'react-icons/lib/io/edit';
import moment from 'moment';
import {Link} from 'react-router-dom';
import AddRemove from "../add-remove/AddRemove";
import * as readableAPI from '../../api/readableAPI';
import {connect} from 'react-redux';
import {editPost} from "../../actions/posts";

class Post extends Component {

    constructor(props) {
        super(props);
    }

    setDate = () => {
        return moment(this.props.post.timestamp).format('MMM DD, YYYY - h:mm a');
    };

    onChangeVoteScore = (voteType, quantity) => {
        this.props.edit(this.props.post.id, {...this.props.post, voteScore: quantity});
    };

    render() {
        return (
            <div className="Post">
                <Link to={'edit/' + this.props.post.id} className="Post__edit"><Edit size={20}/></Link>
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

export const mapDispatchToProps = (dispatch) => {
    return {
        edit: (id, post) => dispatch(editPost(id, post)),
    }
};

export default connect(null, mapDispatchToProps)(Post);