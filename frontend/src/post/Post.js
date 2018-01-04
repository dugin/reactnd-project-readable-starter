import React, {PureComponent} from 'react';
import AddSubtract from "../components/AddSubtract";
import styled from 'styled-components';
import colors from "./../styles/constants/colors";
import {StyledPrimaryChip} from './../styles/styles';
import PropTypes from "prop-types";
import moment from 'moment';
import {voteType} from "../utils/constants";
import {connect} from "react-redux";
import {removePost, voteOnPost} from "./post.action";
import OptionMenu from "../components/OptionMenu";
import {withRouter} from "react-router-dom";
import RemoveDialog from "../components/RemoveDialog";

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


const StyledOptions = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
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

    state = {
        openRemoveDialog: false
    };

    onAddOrSubtract = (voteType) => {
        this.props.dispatch(voteOnPost(this.props.post.id, voteType))
    };

    onOption = (o) => {

        if (o === 'edit') {
            this.props.history.push(`/edit/${this.props.post.id}`);
        }

        else if (o === 'remove') {
            this.setState({openRemoveDialog: true});
        }

    };

    onRemove = () => {
        this.props.dispatch(removePost(this.props.post.id));
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

                    <StyledOptions>
                        <OptionMenu
                            options={['edit', 'remove']}
                            onSelect={(o) => this.onOption(o)}
                        />
                        <StyledPrimaryChip
                            label={post.category}
                        />
                    </StyledOptions>
                </StyledDiv>

                <Footer
                    author={post.author}
                    timestamp={post.timestamp}
                    voteScore={post.voteScore || 1}
                />

                <RemoveDialog
                    onClose={() => this.setState({openRemoveDialog: false})}
                    onRemove={this.onRemove}
                    open={this.state.openRemoveDialog}
                    post={post}
                />
            </StyledSection>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired
};
export default withRouter(connect()(Post));