import React from 'react';
import Button from 'material-ui/Button';
import {Card} from "../../components/cards/index";
import {Collapse, Dialog, DialogTitle, DialogContent, DialogContentText } from 'material-ui';
import {capitalize} from "lodash";
import {Link} from "react-router";
import {Article} from "../../components/article";
import {skillsTextsRender} from "./skills-texts";
import {skillsActions} from "./skills-actions";
import "./style.scss";


export class TechnicalSkills extends React.Component {

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
                    title="JavaScript" 
                    skillLevel={75}
                    content="C’est le premier langage que j’ai utilisé et cela m’a permis d’appréhender le développement logiciel ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openSkillModal("javascript", "JavaScript")
                        }
                    ]}
                />
                <Card 
                    title="Git" 
                    skillLevel={75}
                    content="J’ai été amené à utiliser Git à travers divers projets techniques scolaires à IN’TECH mais aussi lors de mon alternance pendant 2 ans et demi. ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openSkillModal("git", "Git")
                        }
                    ]}
                />
                <Card 
                    title="ReactJs" 
                    skillLevel={80}
                    content="Durant mon stage et mon alternance, donc pendant 2 ans et demi, j’ai approfondi ma connaissance sur cette librairie ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openSkillModal("react", "ReactJS")
                        }
                    ]}
                />
                <Card 
                    title="C#" 
                    skillLevel={70}
                    content="Le C# est le premier langage de programmation avec lequel j’ai appris le développement orienté objet ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openSkillModal("csharp", "C#")
                        }
                    ]}
                />
                <Card 
                    title="SQL" 
                    skillLevel={60}
                    content="Lors de mon alternance chez KLEE GROUP, j’ai pu réellement manipuler une base de données avec le langage SQL ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openSkillModal("sql", "SQL")
                        }
                    ]}
                />
            </div>
        );
    }

    openSkillModal(type, name) {
        switch(type) {
            case "javascript":
                skillsActions.openJavascriptModal(this.props.openModal, type, name, this.renderProjectListButtons);
                break;
            case "git":
                skillsActions.openGitModal(this.props.openModal, type, name, this.renderProjectListButtons);
                break;
            case "react":
                skillsActions.openReactModal(this.props.openModal, type, name, this.renderProjectListButtons);
                break;
            case "csharp":
                skillsActions.openCSharpModal(this.props.openModal, type, name, this.renderProjectListButtons);
                break;
            case "sql":
                skillsActions.openSqlModal(this.props.openModal, type, name, this.renderProjectListButtons);
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
