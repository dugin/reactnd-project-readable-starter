import React, {PureComponent} from 'react';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import ArrowDropUp from 'material-ui-icons/ArrowDropUp';
import PropTypes from 'prop-types';
import {voteType} from "../utils/constants";
import styled from "styled-components";
import colors from "../styles/constants/colors";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  
    
    svg{
        transform: scale(2);
        color: ${colors.secondary};
    }
`;

class AddSubtract extends PureComponent {

    constructor(props) {
        super(props);

    }

    onAdd = () => {
        this.props.onAddOrSubtract(voteType.upVote);
    };

    onRemove = () => {
        this.props.onAddOrSubtract(voteType.downVote);
    };

    render() {

        return (
            <StyledDiv>
                <a onClick={this.onAdd}> <ArrowDropUp/></a>
                <a onClick={this.onRemove}> <ArrowDropDown/></a>
            </StyledDiv>
        )
    }
}

AddSubtract.propTypes = {
    onAddOrSubtract: PropTypes.func.isRequired
};

export default AddSubtract;