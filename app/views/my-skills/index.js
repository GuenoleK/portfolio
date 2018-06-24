import React from 'react';
import {Card} from "../../components/cards/index";
import {capitalize} from "lodash";
import {Link} from "react-router";
import {Article} from "../../components/article";
import {TechnicalSkills} from "./technical";
import {TransversalSkills} from "./transversal";
import {Slide, AppBar, Toolbar, IconButton, Typography, Button, Collapse, Dialog, DialogTitle, DialogContent, DialogContentText} from "material-ui";
import {skillsActions} from "./skills-actions";
import "./style.scss";
import { Parallax } from 'react-parallax';

export class MySkillsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalopen: false,
            modalContent: "Simple skill modal content.",
            modalTitle: "Modal title",
            projectList: [],
            currentPath: `/my-skills/${this.props.params.name}/`
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0)
        const {skill, name} = this.props.router.params

        switch(skill) {
            // Technical
            case "javascript":
                skillsActions.openJavascriptModal(this.openSkillModal, skill, "JavaScript", this.renderProjectListButtons);
                break;
            case "git":
                skillsActions.openGitModal(this.openSkillModal, skill, "Git", this.renderProjectListButtons);
                break;
            case "react":
                skillsActions.openReactModal(this.openSkillModal, skill, "ReactJS", this.renderProjectListButtons);
                break;
            case "csharp":
                skillsActions.openCSharpModal(this.openSkillModal, skill, "C#", this.renderProjectListButtons);
                break;
            case "sql":
                skillsActions.openSqlModal(this.openSkillModal, skill, "SQL", this.renderProjectListButtons);
                break;
            
            // Transversal
            case "communication":
                skillsActions.openCommunicationModal(this.openSkillModal, skill, "Vulgarisation du langage", this.renderProjectListButtons);
                break;
            case "curiosity":
                skillsActions.openCuriosityModal(this.openSkillModal, skill, "Curiosité", this.renderProjectListButtons);
                break;
            case "teamSpirit":
                skillsActions.openReactModal(this.openSkillModal, skill, "Esprit d'équipe", this.renderProjectListButtons);
                break;
            case "perseverance":
                skillsActions.openPerseveranceModal(this.openSkillModal, skill, "Persévérance", this.renderProjectListButtons);
                break;
            default:
                break;
        }
    }

    render() {
        const headline = this.props.params.name === "technical" ? "Compétences techniques" : this.props.params.name === "transversal" ? "Compétences transverses" : "Mes compétences";
        return(
            <div data-component="my-skills">
                <Parallax className="home-intro" bgImage={require('../../assets/preview.png')} strength={400}>
                    <Card 
                        content={
                            <span>
                                {headline}
                            </span>
                        }
                        type="home"
                    />
                    <div className="fullscreen-header__pointer material-icons">expand_more</div>
                </Parallax>
                <Article headline={undefined} content={this.skillsCardContent(this.props.params.name)} />
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

    skillsCardContent(path) {
        if (path === "technical") {
            return <TechnicalSkills router={this.props.router} openModal={this.openSkillModal} projectList={this.state.projectList} projectListButtons={this.renderProjectListButtons}/>
        } else if (path === "transversal") {
            return <TransversalSkills router={this.props.router} openModal={this.openSkillModal} projectList={this.state.projectList} projectListButtons={this.renderProjectListButtons}/>
        }

        return <div>Nope</div>
    }

    openSkillModal = (type, modalTitle, modalContent, projectList) => {
        this.skillsNavigation(type)
        this.setState({
            modalTitle,
            modalContent,
            projectList
        });
        this.setState({isModalopen:true});
    }

    handleRequestClose = value => {
        this.setState({ isModalopen: false });
        this.skillsNavigation("all")
    };
    
    skillsNavigation(path) {
        this.props.router.push(`${this.state.currentPath}${path}`);
    }

    renderProjectListButtons = () => {
        return(
            <div data-component="modal-skill-list">
                <h5>{this.state.projectList.length > 1 ? "Projets associés" : "Projet associé"}</h5>
                {
                    this.state.projectList.map((project, idx) => {
                        return <Link className="link-list" to={`/my-achievements/${project.link}`}><Button className={`list-button${this.state.projectList.length === 1 ? `-${idx}` : ""}`} variant="raised" color="secondary">{project.name}</Button></Link>
                    })
                }
            </div>
        );
    }
}
