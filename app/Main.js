/**
* In this file, we create a React component
* which incorporates components provided by Material-UI.
*/
import React, {Component} from 'react';
import {Layout} from './components/layout';

class Main extends Component {

    render() {
        return (
            <div id='container'>
                {this.props.children}
            </div>
        );
    }
}

export default Main;
