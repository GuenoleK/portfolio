import React, {PureComponent} from 'react';
import "./style.scss";
import {HeaderLink} from "./headerLink";

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
            headerPosition: "0px",
            updateMDL: false
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
            this.setState({headerClassName: "header-nav-down", buttonClassPosition: "header-button-down"})
        }
        this.setState({lastScrollTop: st});
    }

    goToMySocial = (url) => {
        window.open(url);
    }

    emailMe = () => {
        window.location.href = "mailto:kikabouguenole@gmail.com&subject=We want you !";
    }


    render() {
        return(
            <div data-component="layout" id="layout">
                <div data-component="header" id="header-layout" className={`${this.state.headerClassName}`}>
                    <div data-component="header-content">
                        <div data-component="header-left-content">
                            <HeaderLink to="/" id="header-link-home" className="mdl-button mdl-js-button mdl-js-ripple-effect header-link" onlyActiveOnIndex={true}>
                                Accueil
                            </HeaderLink>
                            <HeaderLink to="/about-me" id="header-link-about-me" className="mdl-button mdl-js-button mdl-js-ripple-effect header-link">
                                Qui suis-je ?
                            </HeaderLink>
                            <HeaderLink to="/my-skills" id="header-link-skills" className="mdl-button mdl-js-button mdl-js-ripple-effect header-link">
                                Mes compétences
                            </HeaderLink>
                            <HeaderLink to="/my-achievements" id="header-link-achievements" className="mdl-button mdl-js-button mdl-js-ripple-effect header-link">
                                Mes réalisations
                            </HeaderLink>
                            <HeaderLink to="my-career" id="header-link-career" className="mdl-button mdl-js-button mdl-js-ripple-effect header-link">
                                Mon expérience
                            </HeaderLink>
                        </div>
                        <div data-component="header-right-content">
                            <button className="mdl-button mdl-js-button mdl-button--icon" onClick={() => this.goToMySocial("https://www.linkedin.com/in/kikabouguenole/")}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </button>
                            <button className="mdl-button mdl-js-button mdl-button--icon" onClick={() => this.goToMySocial("https://github.com/GuenoleK")}>
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <button 
                    id="header-button" 
                    data-component="header-button"
                    className={`mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored ${this.state.buttonClassPosition}`}
                    onClick={() => this.emailMe()}
                    >
                        <i className="material-icons">email</i>
                </button>
                <div data-component="content">
                    {this.props.children}
                </div>
                <footer data-component="footer">
                    Portfolio - Guénolé Kikabou
                </footer>
            </div>
        );
    }
}