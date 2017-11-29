import React, {Component} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import './SortBy.css';
import propTypes from 'prop-types';

class SortBy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            selected: props.default
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({selected: this.state.selected  ||  nextProps.default  || 'category'});
    }

    setSelected = (selected) => {
        this.setState({selected}, () => this.props.selected(selected));
    };

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    };

    render() {
        return (
            <ButtonDropdown className="SortBy" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.state.selected}
                </DropdownToggle>
                <DropdownMenu>
                    {this.props.options.map(s =>
                        (<DropdownItem onClick={() => this.setSelected(s)} key={s}> {s}</DropdownItem>)
                    )}

                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

SortBy.propTypes = {
    selected: propTypes.func.isRequired,
    options: propTypes.array.isRequired,
    default: propTypes.string
};


export default SortBy;