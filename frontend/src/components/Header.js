import React, {PureComponent} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import SelectMenu from "./SelectMenu";
import {sortable} from "../utils/constants";
import {connect} from "react-redux";
import {sortPosts} from "../post/post.action";
import {Link, withRouter} from "react-router-dom";
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';


const StyledTypography = styled(Typography)`
   font-weight: 300;
`;

const StyledToolbar = styled(Toolbar)`
   justify-content: space-between;
   display: flex;
`;

const StyledBackButton = styled(Link)`
    visibility:  ${props => props.shouldshowback === 'true' ? 'visible': 'hidden'  };
    color: white;
    margin-top: 8px;
     svg{
        transform: scale(1.5);
    }
`;

const StyledSelectMenuContainer = styled.div`
     visibility:  ${props => props.shouldshowback === 'true' ? 'hidden' :  'visible'  };
`;


class Header extends PureComponent {

    onSort = (sortBy) => {
        this.props.dispatch(sortPosts(sortBy));
    };

    shouldShowBack = () => {
        return (this.props.location.pathname.split('/').length === 3).toString();
    };

    render() {
        return (
            <AppBar position="static">

                <StyledToolbar>
                    <StyledBackButton shouldshowback={this.shouldShowBack()} to='/'><KeyboardArrowLeft/></StyledBackButton>
                    <StyledTypography type="title" color="inherit">
                        My Readable
                    </StyledTypography>

                    <StyledSelectMenuContainer shouldshowback={this.shouldShowBack()}>
                    <SelectMenu
                        defaultValue='Sort By'
                        options={sortable}
                        onSelect={this.onSort}
                    />
                    </StyledSelectMenuContainer>

                </StyledToolbar>
            </AppBar>
        );
    };
}

export default withRouter(connect()(Header));