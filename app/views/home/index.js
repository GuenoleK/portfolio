import React, {PureComponent} from 'react';
import "./style.scss";
import { Parallax } from 'react-parallax';

export class HomeView extends PureComponent {

    render() {
        return(
            <div data-component="home-container">
                <Parallax className="home-intro" bgImage={require('../../assets/intro5.jpg')} strength={400}>
                    <h1> Intro </h1>
                </Parallax>
                <div id="home-about-me" data-component="home-about-me">
                    Qui suis-je ?
                </div>
                <div id="home-my-skills" data-component="home-my-skills">
                    Mes compétences
                </div>
                <div id="home-my-achievements" data-component="home-my-achievements">
                    Mes projets
                </div>
                <div id="home-my-career" data-component="home-my-career">
                    Mon expérience
                </div>
            </div>
        );
    }
}
