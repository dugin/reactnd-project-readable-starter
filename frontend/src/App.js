import React, {PureComponent} from 'react';
import Header from "./components/Header";
import styled from "styled-components";
import {connect} from "react-redux";
import PostsPage from "./pages/Posts.page";
import media from 'styled-media-query';
import {Redirect, Switch, Route, withRouter} from "react-router-dom";

const Container = styled.main`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
  
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
                        <Route exact path="/category/:categoryID" component={PostsPage}/>
                        <Route exact path="/edit/:postID" component={PostsPage}/>
                        <Route exact path="/" component={PostsPage}/>
                        <Redirect to="/" path="**" component={PostsPage}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default withRouter(connect()(App));
