import React, {PureComponent} from 'react';
import Button from 'material-ui/Button';
import Menu, {MenuItem} from 'material-ui/Menu';
import styled from "styled-components";
import MoreVert from 'material-ui-icons/MoreVert';
import PropTypes from 'prop-types';
import colors from "../styles/constants/colors";
import {StyledButton} from "../styles/styles";


const StyledDiv = styled.div`
      Button{
        padding: 0;
        
          span{
        color: ${colors.primary};    
      }
      }
    
`;

class OptionMenu extends PureComponent {
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
        const {options} = this.props;
        return (
            <StyledDiv>
                <StyledButton
                    aria-owns={this.state.open ? 'select-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVert/>
                </StyledButton>
                <Menu
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={() => this.setState({open: false})}
                >
                    {options.map(o => (<MenuItem key={o} onClick={() => this.handleClose(o)}>{o}</MenuItem>))}
                </Menu>
            </StyledDiv>
        );
    }
}


OptionMenu.propTypes = {
    options: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default OptionMenu;