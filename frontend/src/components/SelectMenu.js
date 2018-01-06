import React, {PureComponent} from 'react';
import Button from 'material-ui/Button';
import Menu, {MenuItem} from 'material-ui/Menu';
import styled, {css} from "styled-components";
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import PropTypes from 'prop-types';
import colors from "../styles/constants/colors";
import {StyledButton} from "../styles/styles";


const StyledDiv = styled.div`
     Button{
        padding: 0;
          }
      span{
        color: white;  
  
        ${props => props.type === 'primary' && css`
            color: ${colors.primary};  
          `}    
      }
`;

class SelectMenu extends PureComponent {
    state = {
        anchorEl: null,
        open: false,
    };

    handleClick = event => {
        this.setState({open: true, anchorEl: event.currentTarget});
    };

    handleClose = selectedValue => {
        this.setState({open: false, selectedValue});

        this.props.onSelect(selectedValue)
    };

    render() {
        const {defaultValue, options, type} = this.props;
        const {selectedValue} = this.state;

        console.log(type);
        return (
            <StyledDiv type={type}>
                <StyledButton
                    aria-owns={this.state.open ? 'select-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    {selectedValue || defaultValue}
                    <ArrowDropDown/>
                </StyledButton>
                <Menu
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={() => this.setState({open: false})}
                >
                    {
                        options.map(o => (<MenuItem key={o} onClick={() => this.handleClose(o)}>{o}</MenuItem>))
                    }

                </Menu>
            </StyledDiv>
        );
    }
}

SelectMenu.defaultProps = {
    type: 'white'
};
SelectMenu.propTypes = {
    options: PropTypes.array.isRequired,
    defaultValue: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    type: PropTypes.string
};

export default SelectMenu;