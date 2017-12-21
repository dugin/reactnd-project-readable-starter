import React from 'react';
import {createMuiTheme} from 'material-ui/styles';
import deepOrange from 'material-ui/colors/deepOrange';
import amber from "material-ui/colors/amber";

const theme = createMuiTheme({
    palette: {
        primary: deepOrange,
        secondary: amber,
    },
    typography: {
        fontFamily: 'Open Sans, sans-serif'
    }
});

export default theme;