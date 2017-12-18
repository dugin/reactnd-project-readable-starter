import React, {Component} from 'react';
import Categories from "../categories/Categories";
import './CreateEdit.page.css';
import serializeForm from 'form-serialize';
import uuidv1 from 'uuid/v1';
import {withRouter} from 'react-router-dom';
import {addPost, editPost} from "../../actions/posts";
import {connect} from 'react-redux';
import {Loader} from "../loader/loader";


export class CreateEditPage extends Component {

    state = {category: 'category'};

    disabledCover = {
        backgroundColor: '#d1d4d7',
        position: 'absolute',
        height: '100%',
        width: 'calc(100% - 15px)',
        zIndex: 1,
        opacity: .5
    };

    disabled = {pointerEvents: 'none'};


    onCategory = (category) => {
        this.setState({category});
    };
    onSubmit = (e) => {
        e.preventDefault();

        const values = {
            ...serializeForm(e.target, {hash: true}),
            category: this.state.category,
            timestamp: Date.now(),
            id: uuidv1()
        };

        this.setPost(values);
    };

    componentDidMount() {
        CreateEditPage.postID = this.props.match.params.id || null;
    };

    setPost = (values) => {
        const editContent = {title: values.title, body: values.body};

        CreateEditPage.postID ? this.props.dispatch(editPost(CreateEditPage.postID, editContent)) : this.props.dispatch(addPost(values));
        this.props.history.goBack();

    };

    render() {
        const post = this.props.post || {title: '', body: '', author: '', category : 'category'};

        if (this.props.isLoading)
            return <Loader/>;

        return (
            <form onSubmit={this.onSubmit} className="CreateEditPage mt-3 row">
                <div className="form-group col-12 ">
                    <input type="text" className="form-control" defaultValue={post.title} required
                           name="title"
                           placeholder="Title"/>
                </div>
                <div className="form-group col-12 ">
                    <textarea className="form-control" defaultValue={post.body} required name="body"
                              rows="6"/>
                </div>

                <div className="row mx-0">
                    <div className="form-group col-7">
                        <input type="text" disabled={CreateEditPage.postID} className="form-control"
                               defaultValue={post.author} required
                               name="author" placeholder="Author"/>
                    </div>
                    <div style={CreateEditPage.postID && this.disabled} className="form-group col-5 pl-0">
                        <div style={CreateEditPage.postID && this.disabledCover}/>
                        <Categories default={post.category} selected={(s) => this.onCategory(s)}
                                    onEdit={true}/>
                    </div>
                </div>
                <div className="col-12 CreateEditPage__submit">
                    <p className="required-field">* All fields are required</p>

                    <button type="submit" disabled={this.state.category === 'category'} className="btn btn-success btn-block">
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

export const mapStateToProps = (state, props) => {

    return {
        post: state.postReducer.posts.find(p => p.id === props.match.params.post_id),
        isLoading: !state.postReducer.fetched,
    }
};

export default connect(mapStateToProps)(withRouter(CreateEditPage));