import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ReadablePage from "./components/readable-page/Readable.page";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import CreateEditPage from "./components/create-edit-page/CreateEdit.page";
import DetailPage from "./components/detail-page/Detail.page";
import {connect} from "react-redux";
import {fetchPosts} from "./actions/posts";
import {fetchCategories} from "./actions/categories";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(fetchPosts());
        this.props.dispatch(fetchCategories());
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <main className="App__main container">
                    <Switch>
                        <Route exact path="/" component={ReadablePage}/>
                        <Route exact path="/create" component={CreateEditPage}/>
                        <Route exact path="/:category" component={ReadablePage}/>
                        <Route exact path="/edit/:post_id" component={CreateEditPage}/>
                        <Route exact path="/:category/:post_id" component={DetailPage}/>
                        <Redirect to="/" path="**" component={ReadablePage}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(null)(App));
