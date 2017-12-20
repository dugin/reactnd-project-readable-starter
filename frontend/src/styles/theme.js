import React from 'react';
import {createMuiTheme} from 'material-ui/styles';
import deepOrange from 'material-ui/colors/deepOrange';

const theme = createMuiTheme({
    palette: {
        primary: deepOrange
    },
    typography: {
        fontFamily: 'Open Sans, sans-serif'
    }
});

export default theme;