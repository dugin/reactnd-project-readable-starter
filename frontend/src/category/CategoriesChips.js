import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import styled from "styled-components";
import colors from "../styles/constants/colors";
import {darken} from 'polished';

const StyledDiv = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const StyledChip = styled(Chip)`
   background-color: ${colors.primary};
   color: white;
       margin: 5px 3px ;

   
   &:hover, :focus{
      background-color: ${darken( 0.2, colors.primary)};
   }
`;

class CategoriesChips extends PureComponent {

    handleClick = category => {

    };

    render() {
        const {categories} = this.props;

        return (
            <StyledDiv>
                {categories.map(c => {
                    return (
                        <StyledChip
                            label={c}
                            key={c}
                            onClick={() => this.handleClick(c)}
                        />
                    );
                })}
            </StyledDiv>
        );
    }
}

CategoriesChips.propTypes = {
    categories: PropTypes.array.isRequired,
};

export default CategoriesChips;