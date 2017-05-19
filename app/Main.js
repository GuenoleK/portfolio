/**
* In this file, we create a React component
* which incorporates components provided by Material-UI.
*/
import React, {Component} from 'react';
import {Layout} from './components/layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Main extends Component {

    render() {
        return (
            <div id='container'>
                <MuiThemeProvider>
                    {this.props.children}
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Main;
