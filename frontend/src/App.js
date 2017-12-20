import React, {PureComponent} from 'react';
import Header from "./components/Header";
import styled from "styled-components";
import {connect} from "react-redux";
import PostsPage from "./pages/Posts.page";
import media from 'styled-media-query';

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
                   <PostsPage/>
                </Container>
            </div>
        );
    }
}

export default connect()(App);
