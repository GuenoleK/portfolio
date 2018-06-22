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
            skillList: [],
            currentPath: "/my-achievements/"
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0)
        const {name} = this.props.router.params
        switch(name) {
            case "it-school":
                this.openAchievementModal("it-school");
                break;
            case "focus":
                this.openAchievementModal("focus");
                break;
            case "portfolio":
                this.openAchievementModal("portfolio");
                break;
            case "prox-iti":
                this.openAchievementModal("prox-iti");
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
        const readMoreText = "Lire plus";
        return(
            <div className="achievements-cards">
                <Card 
                    title="It'School" 
                    content="Au sein des écoles, les institutrices sont souvent confrontées à des problèmes logistiques ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openAchievementModal("it-school")
                        }
                    ]}
                />
                <Card 
                    title="Focus" 
                    content="Lors de mon stage de 3e année d’étude j’ai intégré l’équipe Focus qui a été un pôle « Innovation » au sein de KLEE Group ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openAchievementModal("focus")
                        }
                    ]}
                />
                <Card 
                    title="Portfolio" 
                    content="Lors de mon stage de 3e année d’étude j’ai intégré l’équipe Focus qui a été un pôle « Innovation » au sein de KLEE Group ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openAchievementModal("portfolio")
                        }
                    ]}
                />
                <Card 
                    title="Prox'ITI" 
                    content="L'association Proxité agit au coeur des quartiers populaires en faveur de l'insertion scolaire et professionnelle des jeunes ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openAchievementModal("prox-iti")
                        }
                    ]}
                />
            </div>
        )
    }

    openAchievementModal(type) {
        this.achievementNavigation(type);
        const headerTitle = `Réalisation : ${capitalize(type)}`
        switch(type) {
            case "it-school":
                this.setState({
                    modalTitle: headerTitle,
                    modalContent:
                    <span>
                        <Article headline="It'School" content ={achievementsTextsRender.renderItSchoolArticleContent()} renderButtonSkillsSecction={this.renderSkillListButtons}/>
                    </span>,
                    skillList: [{name: "Curiosité", link: "transversal/curiosity"}]
                });
                break;
            case "prox-iti":
                this.setState({
                    modalTitle: headerTitle,
                    modalContent:
                    <span>
                        <Article headline="prox-iti" content ={achievementsTextsRender.renderProxItiArticleContent()} renderButtonSkillsSecction={this.renderSkillListButtons}/>
                    </span>,
                    skillList: [{name: "Esprit d'équipe", link: "transversal/teamSpirit"}]
                });
                break;
            case "focus":
                this.setState({
                    modalTitle: headerTitle,
                    modalContent:
                    <span>
                        <Article headline="Focus" content ={achievementsTextsRender.renderFocusArticleContent()} renderButtonSkillsSecction={this.renderSkillListButtons}/>
                    </span>,
                    skillList: [{name: "JavaScript", link: "technical/javascript"}, {name: "GitHub", link: "technical/github"}]
                });
                break;
            case "portfolio":
                this.setState({
                    modalTitle: headerTitle,
                    modalContent:
                    <span>
                        <Article headline="Portfolio" content ={achievementsTextsRender.renderProxItiArticleContent()} renderButtonSkillsSecction={this.renderSkillListButtons}/>
                    </span>,
                    skillList: [{name: "JavaScript", link: "technical/javascript"}, {name: "GitHub", link: "technical/github"}]
                });
                break;
            default:
                this.setState({
                    modalTitle: headerTitle,
                    modalContent: "Réalisation à venir.",
                    skillList: []
                });

        }
        this.setState({isModalopen:true});
    }

    handleRequestClose = value => {
        this.setState({ isModalopen: false });
        this.achievementNavigation("all");
    };

    renderSkillListButtons = () => {
        return(
            <div data-component="modal-skill-list">
                <h5>{this.state.skillList.length > 1 ? "Compétence associés" : "Compétence associé"}</h5>
                {
                    this.state.skillList.map((skill, idx) => {
                        return <Link className="link-list" to={`/my-skills/${skill.link}`}><Button className={`list-button${this.state.skillList.length === 1 ? `-${idx}` : ""}`} variant="raised" color="secondary">{skill.name}</Button></Link>
                    })
                }
            </div>

        );
    }
    
    achievementNavigation(path) {
        this.props.router.push(`${this.state.currentPath}${path}`);
    }
}