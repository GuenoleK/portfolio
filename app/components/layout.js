import React, {PureComponent} from 'react';
import "./style.scss";

export class Layout extends PureComponent {

    render() {
        console.log('HELLO');
        return(
            <div data-component="layout">
                <div data-component="header">
                    header
                </div>
                <button data-component="header-button" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent">
                    <i className="material-icons">email</i>
                </button>
                <div data-component="content">
                    content
                    {this.props.children}
                </div>
                <footer data-component="footer">
                    Portfolio - Guénolé Kikabou
                </footer>
            </div>
        );
    }
}