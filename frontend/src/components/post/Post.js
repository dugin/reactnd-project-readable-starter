import React, {Component} from 'react';
import './Post.css';
import IosComposeOutline from 'react-icons/lib/io/ios-compose-outline';
import IosPersonOutline from 'react-icons/lib/io/ios-person-outline';
import Trophy from 'react-icons/lib/io/trophy';
import moment from 'moment';
import {Link} from 'react-router-dom';

class Post extends Component {

    componentWillReceiveProps(nextProps) {
    }

    setDate = () => {
        return moment(this.props.post.timestamp).format('MMM, DD - h:mm a')
    };

    render() {
        return (
            <div className="Post">
                <div className="Post__main">
                    <div className="Post__main__score">
                        <Trophy size={25}/>
                        {this.props.post.voteScore}
                    </div>
                    <div className="Post__main__info">
                        <Link to={'post/'+this.props.post.id} className="Post__main__info__title">  {this.props.post.title}</Link>
                        <h3 className="Post__main__info__body"> {this.props.post.body}</h3>
                    </div>
                </div>
                <div className="Post__more">
                    <div><IosComposeOutline size={25}/>{this.setDate()}</div>
                    <div><IosPersonOutline size={25}/>{this.props.post.author}</div>
                    <div className="badge badge-pill badge-secondary">{this.props.post.category}</div>

                </div>
            </div>
        )
    }
}

export default Post;