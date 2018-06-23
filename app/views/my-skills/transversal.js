import React from 'react';
import Button from 'material-ui/Button';
import {Card} from "../../components/cards/index";
import Dialog, { DialogTitle, DialogContent, DialogContentText } from 'material-ui/Dialog';
import Collapse from 'material-ui/transitions/collapse';
import {capitalize} from "lodash";
import {Link} from "react-router";
import {Article} from "../../components/article";
import "./style.scss";
import {skillsTextsRender} from "./skills-texts";
import {skillsActions} from "./skills-actions";


export class TransversalSkills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalopen: false,
            modalContent: "Simple skill modal content.",
            modalTitle: "Modal title",
            projectList: []
        }
    }
    
    render() {
        const readMoreText = "Lire plus";
        return(
            <div className="skills-cards">
                <Card 
                    title="Curiosité" 
                    skillLevel={80}
                    content="Je définirais la curiosité comme le fait d’avoir un vif intérêt à découvrir, connaître et apprendre de nouv..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openSkillModal("curiosity", "Curiosity")
                        }
                    ]}
                />
                <Card
                    title="Vulgarisation du langage" 
                    skillLevel={75}
                    content="C’est la capacité de faire comprendre des notions a un public qui n’est pas amené à connaître le langage utilisé dans mon domaine d’expertise ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openSkillModal("communication")
                        }
                    ]}
                />
                <Card 
                    title="Persévérance" 
                    skillLevel={70}
                    content="C'est la capacité de tout mettre en œuvre, et cela malgré les difficultés qui peuvent se présenter..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openSkillModal("perseverance", "Persévérance")
                        }
                    ]}
                />
                <Card 
                    title="Esprit d'équipe" 
                    skillLevel={75}
                    content="Travailler en équipe, participer activement pour un objectif commun, collaborer avec les autres et privilégier la réussite du groupe. C’est cela pour moi l’esprit d’équipe ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openSkillModal("teamSpirit")
                        }
                    ]}
                />
            </div>
        );
    }
    
    openSkillModal(type, name) {
        switch(type) {
            case "perseverance":
                skillsActions.openPerseveranceModal(this.props.openModal, type, name, this.renderProjectListButtons);
                break;
            case "curiosity":
                skillsActions.openCuriosityModal(this.props.openModal, type, name, this.renderProjectListButtons);
            break;
            case "communication":
                skillsActions.openCommunicationModal(this.props.openModal, type, name, this.renderProjectListButtons);
            break;
            case "teamSpirit":
                skillsActions.openTeamSpiritModal(this.props.openModal, type, name, this.renderProjectListButtons);
            break;
            default:
                this.props.openModal(
                    "nope",
                    "Compétence",
                    "Compétence à venir."
            );
        }
    }

    renderProjectListButtons = () => {
        return(
            <div data-component="modal-skill-list">
                <h5>{this.props.projectList.length > 1 ? "Projets associés" : "Projet associé"}</h5>
                {
                    this.props.projectList.map((project, idx) => {
                        return <Link className="link-list" to={`/my-achievements/${project.link}`}><Button className={`list-button${this.props.projectList.length === 1 ? `-${idx}` : ""}`} variant="raised" color="secondary">{project.name}</Button></Link>
                    })
                }
            </div>
        );
    }
}
