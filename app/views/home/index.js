import React, {PureComponent} from 'react';
import "./style.scss";

export class HomeView extends PureComponent {

    render() {
        return(
            <div data-component="home-container">
                <div data-component="home-intro">
                    Intro
                </div>
                <div data-component="home-about-me">
                    Qui suis-je ?
                </div>
                <div data-component="home-my-skills">
                    Mes compétences
                </div>
                <div data-component="home-my-achievements">
                    Mes projets
                </div>
                <div data-component="home-my-career">
                    Mon expérience
                </div>
            </div>
        );
    }
}
