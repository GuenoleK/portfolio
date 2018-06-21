import React, {PureComponent} from 'react';
import "./style.scss";
import { Parallax } from 'react-parallax';
import {Link} from 'react-router';
import {Card} from "../../components/cards/index";

export class HomeView extends PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <div data-component="home-container">
                <Parallax className="home-intro" bgImage={require('../../assets/intro5.jpg')} strength={100}>
                    <div data-component="quote-card" className="demo-card-event mdl-card mdl-shadow--2dp">
                        <div className="mdl-card__title mdl-card--expand">
                            <h4>
                                "Success is not the key to happiness. 
                                Happiness is the key to success. If you love what you are doing, you will be successful." 
                                <br/>
                                 - Albert Shweitzer
                            </h4>
                        </div>
                        <div data-component="quote-bottom" className="mdl-card__actions mdl-card--border">
                            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            Add to Calendar <i className="material-icons">event</i>
                            </a>
                        </div>
                    </div>
                    <div className="fullscreen-header__pointer material-icons">expand_more</div>
                </Parallax>
                <Parallax id="home-about-me" className="home-about-me" bgImage={require('../../assets/style_imagery_bestpractices_narrative1.png')} strength={400}>
                    <Card 
                        content={
                            <span>
                                Je m'appelle Guénolé Kikabou
                                <br/>
                                et je suis étudiant en ingénierie du logiciel.
                                <br/>
                                Apprennez-en plus sur moi.
                            </span>
                        } 
                        buttonName="Qui suis-je ?"
                        link="/about-me"
                        type="home"
                    />
                </Parallax>
                <Parallax id="home-my-skills" className="home-my-skills" bgImage={require('../../assets/preview.png')} strength={400}>
                    <Card 
                        content={<span>
                                Découvrez
                                <br/>
                                les compétences que j'ai acquis
                                <br/>
                                au fil des mes expériences
                            </span>}
                        buttonName="Mes compétences"
                        link="/my-skills/all" 
                        type="home"
                    />
                </Parallax>
                <Parallax id="home-my-achievements" className="home-my-achievements" bgImage={require('../../assets/preview.gif')} strength={400}>
                    <Card 
                        content={<span>
                                Découvrez
                                <br/>
                                l'ensemble de mes réalisations
                            </span>} 
                        buttonName="Mes réalisations"
                        link="/my-achievements/all" 
                        type="home"
                    />
                </Parallax>
                <Parallax id="home-my-career" className="home-my-career" bgImage={require('../../assets/preview (1).png')} strength={400}>
                    <Card 
                        content={<span>
                            Découvrez
                            <br/>
                            les lieux où j'ai pu mettre en pratique
                            <br/>
                            et développer l'ensemble de mes compétences
                            </span>} 
                        buttonName="Mon expérience"
                        link="/my-career" 
                        type="home"
                    />
                </Parallax>
            </div>
        );
    }
}
