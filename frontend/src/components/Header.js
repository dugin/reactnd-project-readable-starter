import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import SelectMenu from "./SelectMenu";

const StyledTypography = styled(Typography)`
   font-weight: 300;
`;

const StyledToolbar = styled(Toolbar)`
   justify-content: space-between;
   display: flex;
`;

const Header = props => {

    return (
        <AppBar  position="static">
            <StyledToolbar >
                <StyledTypography type="title" color="inherit">
                    My Readable
                </StyledTypography>

                <SelectMenu defaultValue='Sort By' options={['vote score', 'created at']}/>
            </StyledToolbar>
        </AppBar>
    );
};

export default Header;