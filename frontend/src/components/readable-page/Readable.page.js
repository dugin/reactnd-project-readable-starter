import React, {Component} from 'react';
import Categories from "../categories/Categories";
import SortBy from "../sort-by/SortBy";
import Post from "../post/Post";
import * as readableAPI from '../../api/readableAPI';
import PlusRound from 'react-icons/lib/io/plus-round';
import './Readable.page.css';
import {Link} from 'react-router-dom';

class ReadablePage extends Component {

    state = {posts: []};

    componentDidMount() {
        this.getAllPosts();
    }

    getAllPosts = () => {
        readableAPI.getAllPosts()
            .then(resp => {
                console.log(resp);
                if (resp.status === 200)
                    this.setState({posts: resp.data});

                else
                    throw new Error({status: resp.status, msg: resp.statusText})
            })
            .catch(err => console.error(err));
    };

    render() {
        return (
            <div className="ReadablePage">
                <Categories/>
                <SortBy/>
                {this.state.posts.map(p => (
                    <Post key={p.id} post={p}/>
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

export default ReadablePage;