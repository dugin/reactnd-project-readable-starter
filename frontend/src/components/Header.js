import React, {PureComponent} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import SelectMenu from "./SelectMenu";
import {sortable} from "../utils/constants";
import {connect} from "react-redux";
import {sortPosts} from "../post/post.action";

const StyledTypography = styled(Typography)`
   font-weight: 300;
`;

const StyledToolbar = styled(Toolbar)`
   justify-content: space-between;
   display: flex;
`;

class Header extends PureComponent {

    onSort = (sortBy) => {
        this.props.dispatch(sortPosts(sortBy));
    };

    render() {
        return (
            <AppBar position="static">
                <StyledToolbar>
                    <StyledTypography type="title" color="inherit">
                        My Readable
                    </StyledTypography>

                    <SelectMenu
                        defaultValue='Sort By'
                        options={sortable}
                        onSelect={this.onSort}
                    />
                </StyledToolbar>
            </AppBar>
        );
    };
}

export default connect()(Header);