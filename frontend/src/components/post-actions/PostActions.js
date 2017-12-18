import React, {Component} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import AndroidMoreVertical from 'react-icons/lib/io/android-more-vertical';
import {Link} from 'react-router-dom';
import './PostActions.css';

class PostActions extends Component {
    state = {dropdownOpen: false};

    render() {
        return <div className="PostActions">
            <ButtonDropdown
                            isOpen={this.state.dropdownOpen}
                            toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
                <DropdownToggle>
                    <AndroidMoreVertical size={25}/>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        <Link to={'edit/' + this.props.post.id}> Edit </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link to={'edit/' + this.props.post.id}> Delete </Link>
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </div>
    }
}


export default PostActions;