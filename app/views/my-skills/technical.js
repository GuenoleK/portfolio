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
                    content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
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
                    content="L'association Proxité agit au coeur des quartiers populaires en faveur de l'insertion scolaire et professionnelle des jeunes ..." 
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
                    content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
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
                    content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
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
                    content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openSkillModal("sql", "SQL")
                        }
                    ]}
                />
                <Card 
                    title="Java" 
                    skillLevel={40}
                    content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
                    buttonProps={[
                        {
                            buttonName: readMoreText,
                            onClick: () => this.openSkillModal("java", "Java")
                        }
                    ]}
                />
            </div>
        );
    }

    openSkillModal(type, name) {
        const headerTitle = `Compétence technique : ${name}`
        switch(type) {
            case "javascript":
                skillsActions.openJavascriptModal(this.props.openModal, type, headerTitle, this.renderProjectListButtons);
                break;
            case "git":
                skillsActions.openGitModal(this.props.openModal, type, headerTitle, this.renderProjectListButtons);
                this.props.openModal(
                    type,
                    headerTitle,
                );
            break;
            case "react":
                skillsActions.openReactModal(this.props.openModal, type, headerTitle, this.renderProjectListButtons);
                this.props.openModal(
                    type,
                    headerTitle,
                );
                this.props.openModal(
                    type,
                );
            break;
            case "csharp":
                this.props.openModal(
                    type,
                    headerTitle,
                    <span>
                        <Article headline={name} content ={skillsTextsRender.renderTeamSpiritArticleContent()} renderButtonSkillsSecction={this.renderProjectListButtons}/>
                    </span>,
                    [{name: "It'School", link: "it-school"}]
                );
            break;
            case "java":
                this.props.openModal(
                    type,
                    headerTitle,
                    <span>
                        <Article headline={name} content ={skillsTextsRender.renderTeamSpiritArticleContent()} renderButtonSkillsSecction={this.renderProjectListButtons}/>
                    </span>,
                    [{name: "It'School", link: "it-school"}]
                );
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
