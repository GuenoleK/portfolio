import React, {PureComponent} from 'react';
import {Card} from "../../components/cards/index";
import {capitalize} from "lodash";
import {Link} from "react-router";
import "./style.scss";
import {Article} from "../../components/article";
import {AppBar, Collapse, Button, Dialog, DialogTitle, DialogContent, DialogContentText, Toolbar, Typography, IconButton, Slide} from 'material-ui'
import {achievementsTextsRender} from "./achievements-texts"

export class MyAchievementsView extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isModalopen: false,
            modalContent: "Simple achievement modal content.",
            modalTitle: "Modal title",
            skillList: []
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0)
        const {name} = this.props.router.params
        switch(name) {
            case "it-school":
                this.openAchievementModal("it-school");
                break;
            default:
                break;
        }
    }

    render() {
        return(
            <div data-component="my-achievements">
                <Article headline="Mes réalisations" content={this.achivementCardContent()} />
                <Dialog className="skills-dialog" onClose={this.handleRequestClose} open={this.state.isModalopen} transition={Collapse} TransitionComponent={this.Transition} fullScreen>
                    <AppBar className="appbar">
                        <Toolbar className="toolbar">
                            <Typography variant="title" color="inherit">{this.state.modalTitle}</Typography>
                            <IconButton color="inherit" onClick={this.handleRequestClose} aria-label="Close">
                                <div className="material-icons">close</div>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <DialogTitle>{this.state.modalTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.state.modalContent}
                            <br/>
                            {this.renderSkillListButtons()}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    Transition(props) {
        return <Slide direction="up" {...props} />;
    }

    achivementCardContent() {
        return(
            <div className="achievements-cards">
                <Card 
                    title="It'School" 
                    content="Au sein des écoles, les institutrices sont souvent confrontées à des problèmes logistiques ..." 
                    onClick={() => this.openAchievementModal("it-school") }
                    buttonName="Lire plus" />
                <Card 
                    title="Prox'ITI" 
                    content="L'association Proxité agit au coeur des quartiers populaires en faveur de l'insertion scolaire et professionnelle des jeunes ..." 
                    onClick={() => this.openAchievementModal("prox-iti") }
                    buttonName="Lire plus" />
            </div>
        )
    }

    openAchievementModal(type) {
        switch(type) {
            case "it-school":
                this.setState({
                    modalTitle: capitalize("Réalisation"),
                    modalContent:
                    <span>
                        <Article headline="It'School" content ={achievementsTextsRender.renderItSchoolArticleContent()} />
                    </span>,
                    skillList: [{name: "Curiosité", link: "transversal/curiosity"}]
                });
                break;
            case "prox-iti":
                this.setState({
                    modalTitle: capitalize("Réalisation"),
                    modalContent:
                    <span>
                        <Article headline="Prox'ITI" content ={achievementsTextsRender.renderProxItiArticleContent()} />
                    </span>,
                    skillList: [{name: "Esprit d'équipe", link: "transversal"}]
                });
                break;
            default:
                this.setState({
                    modalTitle: "Réalisation",
                    modalContent: "Réalisation à venir.",
                    skillList: []
                });

        }
        this.setState({isModalopen:true});
    }

    handleRequestClose = value => {
        this.setState({ isModalopen: false });
    };

    renderSkillListButtons() {
        return this.state.skillList.map(skill => {
            return <div data-component="modal-skill-list">
                    <h5>{this.state.skillList.length > 1 ? "Compétence associés" : "Compétence associé"}</h5>
                    <Link to={`/my-skills/${skill.link}`}><Button raised color="accent">{skill.name}</Button></Link>
                </div>
        })
    }
}
