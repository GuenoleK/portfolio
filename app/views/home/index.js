import React, {PureComponent} from 'react';
import "./style.scss";
import { Parallax } from 'react-parallax';
import {Card} from "../../components/cards/index";
import {momentUtil} from "../../utils/moment";

export class HomeView extends PureComponent {

    date = momentUtil.date();

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <div data-component="home-container">
                <Parallax className="home-intro" bgImage={require('../../assets/guenole_flat.jpg')} strength={250}>
                    <div data-component="quote-card" className="demo-card-event mdl-card mdl-shadow--2dp">
                        <div className="mdl-card__title mdl-card--expand">
                            <h2>Guénolé Kikabou,</h2>
                            <h3>{this.date([1991, 2, 22]).fromNow(true)}</h3>
                            <h4 className="role">Ingénieur informatique spécialisé en ingénierie du logiciel</h4>
                        </div>
                    </div>
                    <div className="fullscreen-header__pointer material-icons">expand_more</div>
                </Parallax>
                <Parallax id="home-about-me" className="home-about-me" bgImage={require('../../assets/style_imagery_bestpractices_narrative1.png')} strength={400}>
                    <Card 
                        content={
                            <span>
                                Développeur font-end javascript, je suis passionné par le partage et les valeurs humaines au sein d’une entreprise.
                            </span>
                        }
                        buttonProps={[
                            {
                                buttonName: "Apprenez-en plus",
                                link: "/about-me"
                            }
                        ]}
                        type="home"
                    />
                </Parallax>
                <Parallax id="home-my-skills" className="home-my-skills" bgImage={require('../../assets/preview.png')} strength={400}>
                    <Card 
                        content={
                            <span>
                                Découvrez mes compétences acquises au fil des mes expériences
                            </span>}
                        buttonProps={[
                            {
                                buttonName: "Compétences techniques",
                                link: "/my-skills/technical/all"
                            },
                            {
                                buttonName: "Compétences transverses",
                                link: "/my-skills/transversal/all"
                            }
                        ]}
                        type="home"
                    />
                </Parallax>
                <Parallax id="home-my-achievements" className="home-my-achievements" bgImage={require('../../assets/preview.gif')} strength={400}>
                    <Card 
                        content={
                            <span>
                                Découvrez<br/>
                                l'ensemble de mes réalisations
                            </span>
                        } 
                        buttonProps={[
                            {
                                buttonName: "Mes réalisations",
                                link: "/my-achievements/all"
                            }
                        ]}
                        type="home"
                    />
                </Parallax>
                <Parallax id="home-my-career" className="home-my-career" bgImage={require('../../assets/preview (1).png')} strength={400}>
                    <Card 
                        content={
                            <span>
                                Découvrez<br/>
                                les lieux où j'ai pu mettre en pratique<br/>
                                et développer l'ensemble de mes compétences
                            </span>
                        } 
                        buttonProps={[
                            {
                                buttonName: "Mon expérience",
                                link: "/my-career"
                            }
                        ]}
                        type="home"
                    />
                </Parallax>
            </div>
        );
    }
}
