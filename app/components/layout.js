import React, {PureComponent} from 'react';
import "./style.scss";

export class Layout extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            didScroll: false,
            lastScrollTop: 0,
            delta: 5,
            navbarHeight: 0,
            buttonClassPosition: "header-button-down",
            headerClassName: "header-nav-down",
            headerPosition: "0px"
        }
    }

    componentDidMount() {
        this.setState({navbarHeight: document.getElementById("header-layout").offsetHeight});
        window.addEventListener('scroll', this.eventScrollHandler);
    }

    componentWIllUnmount() {
        window.removeEventListener('scroll', this.eventScrollHandler);
    }

    eventScrollHandler = event => {
        const {lastScrollTop, delta, navbarHeight} = this.state;
        this.setState({didScroll: true});
        var st = window.scrollY;
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta) {
            return;
        }
        
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            this.setState({headerClassName: "header-nav-up", buttonClassPosition: "header-button-up"})
        } else {
            // Scroll Up
            console.log('ST', st);
            this.setState({headerClassName: "header-nav-down", buttonClassPosition: "header-button-down"})
        }
        this.setState({lastScrollTop: st});
    }

    render() {
        console.log(this.state);
        return(
            <div data-component="layout" id="layout">
                <div data-component="header" id="header-layout" className={`${this.state.headerClassName}`}>
                    <div className="header-content">
                        header
                    </div>
                </div>
                <button 
                    id="header-button" 
                    data-component="header-button"
                    className={`mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent ${this.state.buttonClassPosition}`}
                    >
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