import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished/lib/index";
import colors from "../styles/constants/colors";
import { StyledPrimaryChip } from "../styles/styles";

const StyledDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const StyledChip = StyledPrimaryChip.extend`
  &:hover,
  :focus {
    background-color: ${darken(0.2, colors.primary)};
  }
`;

class CategoriesChips extends PureComponent {
  handleClick = category => {
    this.props.onSelect(category);
  };

  render() {
    const { categories } = this.props;

    return (
      <StyledDiv>
        {categories.map(c => {
          return (
            <StyledChip label={c} key={c} onClick={() => this.handleClick(c)} />
          );
        })}
      </StyledDiv>
    );
  }
}

CategoriesChips.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CategoriesChips;
