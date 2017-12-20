import React from 'react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components'
import globalStyle from "./styles/global";
import {BrowserRouter} from 'react-router-dom';
import configureStore from "./configs/store.config";
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import theme from "./styles/theme";
import {MuiThemeProvider} from "material-ui";
import JssProvider from "react-jss/lib/JssProvider";
import {generateClassName, jss} from "./configs/jss.config";


injectGlobal`${globalStyle}`;


const renderer = () => (
    ReactDOM.render(
        <Provider store={configureStore()}>
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <JssProvider jss={jss} generateClassName={generateClassName}>
                        <App/>
                    </JssProvider>
                </MuiThemeProvider>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    ));


renderer();


if (module.hot) {
    module.hot.accept('./App', () => {
        renderer();
    })
}

registerServiceWorker();
