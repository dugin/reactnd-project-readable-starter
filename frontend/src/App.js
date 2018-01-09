import React, {PureComponent} from 'react';
import Header from "./components/Header";
import styled from "styled-components";
import {connect} from "react-redux";
import PostsPage from "./pages/Posts.page";
import media from 'styled-media-query';
import {Redirect, Switch, Route, withRouter} from "react-router-dom";
import PostDetailPage from "./pages/Post-detail.page";
import Footer from "./components/Footer";


const Container = styled.main`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
  min-height: calc(100vh - 130px);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  
  ${media.greaterThan('medium')`
    padding: 0 24px;
  `};

`;

class App extends PureComponent {

    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <Switch>
                        <Route exact path="/:categoryID" component={PostsPage}/>
                        <Route exact path="/edit/:postID" component={PostsPage}/>
                        <Route exact path="/:categoryID/:postID" component={PostDetailPage}/>
                        <Route exact path="/" component={PostsPage}/>
                        <Redirect to="/" path="**" component={PostsPage}/>
                    </Switch>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect()(App));
