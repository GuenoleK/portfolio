/**
* In this file, we create a React component
* which incorporates components provided by Material-UI.
*/
import React, {Component} from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

class Main extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div id='container'>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
