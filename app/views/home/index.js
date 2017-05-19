import React, {PureComponent} from 'react';
import "./style.scss";
import { Parallax } from 'react-parallax';
import {Link} from 'react-router';

export class HomeView extends PureComponent {

    render() {
        return(
            <div data-component="home-container">
                <Parallax className="home-intro" bgImage={require('../../assets/intro5.jpg')} strength={400}>
                    <div className="demo-card-event mdl-card mdl-shadow--2dp">
                        <div className="mdl-card__title mdl-card--expand">
                            <h4>
                                "Success is not the key to happiness. 
                                Happiness is the key to success. If you love what you are doing, you will be successful." 
                                <br/>
                                 - Albert Shweitzer
                            </h4>
                        </div>
                        <div className="mdl-card__actions mdl-card--border">
                            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            Add to Calendar
                            </a>
                            <i className="material-icons">event</i>
                        </div>
                    </div>
                </Parallax>
                <div id="home-about-me" data-component="home-about-me">
                    <h4>Je m'appelle Guénolé Kikabou. <br/> Je suis étudiant en ingénierie du logiciel.</h4>
                    <Link to="/about-me" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--raised">
                        Qui suis-je ?
                    </Link>
                </div>
                <div id="home-my-skills" data-component="home-my-skills">
                    <h4>Mes compétences</h4>
                    <Link to="/about-me" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--raised">
                        Mes compétences
                    </Link>
                </div>
                <div id="home-my-achievements" data-component="home-my-achievements">
                    <h4>Mes réalisations</h4>
                    <Link to="/my-achievements" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--raised">
                        Mes réalisations
                    </Link>
                </div>
                <div id="home-my-career" data-component="home-my-career">
                    <h4>Mon expérience</h4>
                    <Link to="/my-career" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--raised">
                        Mon expérience
                    </Link>
                </div>
            </div>
        );
    }
}
