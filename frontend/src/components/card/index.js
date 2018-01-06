import {removePost, voteOnPost} from "../../post/post.action";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import React, {PureComponent} from "react";
import RemoveDialog from "../RemoveDialog";
import OptionMenu from "../OptionMenu";
import {StyledPrimaryChip} from "../../styles/styles";
import Footer from "./Footer";
import Title from "./Title";
import Body from "./Body";
import AddSubtract from "../AddSubtract";
import styled, {css} from 'styled-components';
import colors from "../../styles/constants/colors";

const StyledSection = styled.section`
 background-color:  white;
  padding: 15px;
  
  ${props => props.type === 'detail' && css`
    margin-top: 10px;
    background: ${colors.background};
  `
    }
  
   ${props => props.type === 'comment' && css`
        border-top: 2px solid ${colors.background};
        border-bottom: 1px solid ${colors.background};
        margin-top: -1px;
`
    }
`;

const StyledDiv = styled.section`
    display: flex;
   
    p{
    font-size: 14px;
    }
`;

const StyledAddSubtractDiv = styled.div`
    display: flex;
    align-items: center;
`;

const StyledOptions = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledMain = styled.section`
   flex-grow: 1;
`;


class Card extends PureComponent {

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
        const {post, type, amount} = this.props;

        return (
            <StyledSection type={type}>
                <StyledDiv>
                    <StyledAddSubtractDiv>
                        <AddSubtract onAddOrSubtract={this.onAddOrSubtract}/>
                    </StyledAddSubtractDiv>

                    <StyledMain>
                        <Title
                            title={post.title}
                            id={post.id}
                            category={post.category}
                            type={type}/>

                        <Body body={post.body}/>
                    </StyledMain>

                    <StyledOptions>
                        <OptionMenu
                            options={['edit', 'remove']}
                            onSelect={(o) => this.onOption(o)}/>

                        {type !== 'comment' && <StyledPrimaryChip label={post.category}/>}
                    </StyledOptions>
                </StyledDiv>

                <Footer
                    author={post.author}
                    timestamp={post.timestamp}
                    voteScore={post.voteScore || 1}
                    amount={amount}
                    type={type}/>

                <RemoveDialog
                    onClose={() => this.setState({openRemoveDialog: false})}
                    onRemove={this.onRemove}
                    open={this.state.openRemoveDialog}
                    post={post}/>
            </StyledSection>
        );
    }
}

Card.defaultProps = {
    type: 'list',
    amount: 0
};
Card.propTypes = {
    post: PropTypes.object.isRequired,
    type: PropTypes.string,
    amount: PropTypes.number
};
export default withRouter(connect()(Card));