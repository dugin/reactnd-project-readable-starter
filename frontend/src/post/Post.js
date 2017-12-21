import React, {PureComponent} from 'react';
import AddSubtract from "../components/AddSubtract";
import styled from 'styled-components';
import colors from "./../styles/constants/colors";
import {StyledPrimaryChip} from './../styles/styles';
import PropTypes from "prop-types";
import moment from 'moment';
import {voteType} from "../utils/constants";
import {connect} from "react-redux";
import {voteOnPost} from "./post.action";

const StyledSection = styled.section`
 background-color: white;
  padding: 15px;
`

const StyledDiv = styled.section`
    display: flex;
    align-items: center;
   
    p{
    font-size: 14px;
    }
`;
const StyledSecondaryChip = StyledPrimaryChip.extend`
   background-color: ${colors.secondary};
`;

const StyledMain = styled.section`
   flex-grow: 1;
`;
const StyledFooter = styled.section`
   display: flex;
   align-items: center;
   margin-left: -10px;
   p{
      margin: 0 0 0 10px;
   }
`;

const Title = ({title}) => {
    return (
        <h1>
            {title}
        </h1>
    )
};

const Body = ({body}) => {
    return (
        <p>
            {body}
        </p>
    )
};


const Footer = ({author, timestamp, voteScore}) => {

    const fromNow = () => {
        return moment(timestamp).fromNow();
    };

    return (
        <StyledFooter>
            <StyledSecondaryChip
                label={voteScore}
            />
            <p>by <b>{author}</b></p>
            <p>{fromNow()}</p>

        </StyledFooter>
    )
};

class Post extends PureComponent {

    onAddOrSubtract = (voteType) => {

        this.props.dispatch(voteOnPost(this.props.post.id, voteType))
    };

    render() {

        const {post} = this.props;

        return (
            <StyledSection>
                <StyledDiv>
                    <div>
                        <AddSubtract
                            onAddOrSubtract={this.onAddOrSubtract}
                        />
                    </div>

                    <StyledMain>
                        <Title
                            title={post.title}
                        />
                        <Body
                            body={post.body}
                        />
                    </StyledMain>

                    <div>
                        <StyledPrimaryChip
                            label={post.category}
                        />
                    </div>
                </StyledDiv>

                <Footer
                    author={post.author}
                    timestamp={post.timestamp}
                    voteScore={post.voteScore || 1}
                />
            </StyledSection>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired
};
export default connect()(Post);