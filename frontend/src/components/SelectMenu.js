import React, {PureComponent} from 'react';
import Button from 'material-ui/Button';
import Menu, {MenuItem} from 'material-ui/Menu';
import styled from "styled-components";
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import PropTypes from 'prop-types';


const StyledDiv = styled.div`
      span{
        color: white;      
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
        const {defaultValue, options} = this.props;
        const {selectedValue} = this.state;
        return (
            <StyledDiv>
                <Button
                    aria-owns={this.state.open ? 'select-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    {selectedValue || defaultValue}
                    <ArrowDropDown/>
                </Button>
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


SelectMenu.propTypes = {
    options: PropTypes.array.isRequired,
    defaultValue: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default SelectMenu;