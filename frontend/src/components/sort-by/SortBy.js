import React, {Component} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import './SortBy.css';
import {sortable} from "../../utils/constants";


class SortBy extends Component {

    state = {
        dropdownOpen: false,
        selected: sortable[0]
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
                    {sortable.map(s =>
                        (<DropdownItem onClick={() => this.setState({selected: s})} key={s}> {s}</DropdownItem>)
                    )}


                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

export default SortBy;