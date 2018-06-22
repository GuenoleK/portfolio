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

    componentWillMount() {
        window.scrollTo(0, 0)
        const {skill} = this.props.router.params
        switch(skill) {
            case "curiosity":
            this.openSkillModal(skill);
                break;
            case "communication":
            this.openSkillModal(skill);
                break;
            case "perseverance":
            this.openSkillModal(skill);
                break;
            case "team-spirit":
            this.openSkillModal(skill);
                break;
            default:
                break;
        }
    }

    render() {
        return(
            <div className="skills-cards">
            <Card 
                title="Curiosité" 
                skillLevel={80}
                content="Je définirais la curiosité comme le fait d’avoir un vif intérêt à découvrir, connaître et apprendre de nouv..." 
                onClick={() => this.openSkillModal("curiosity") }
                buttonName="Lire plus" />
            <Card
                title="Vulgarisation du langage" 
                skillLevel={75}
                content="C’est la capacité de faire comprendre des notions a un public qui n’est pas amené à connaître le langage utilisé dans mon domaine d’expertise ..." 
                onClick={() => this.openSkillModal("communication") }
                buttonName="Lire plus" />
            <Card 
                title="Persévérance" 
                skillLevel={70}
                content="C'est la capacité de tout mettre en œuvre, et cela malgré les difficultés qui peuvent se présenter..." 
                onClick={() => this.openSkillModal("perseverance") }
                buttonName="Lire plus" />
            <Card 
                title="Esprit d'équipe" 
                skillLevel={75}
                content="Travailler en équipe, participer activement pour un objectif commun, collaborer avec les autres et privilégier la réussite du groupe. C’est cela pour moi l’esprit d’équipe ..." 
                onClick={() => this.openSkillModal("teamSpirit") }
                buttonName="Lire plus" />
            <Card 
                title="Force de proposition" 
                skillLevel={70}
                content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
                onClick={() => this.openSkillModal("synergie") }
                buttonName="Lire plus" />
            </div>
        );
    }

    
    openSkillModal(type) {
        switch(type) {
            case "perseverance":
                this.props.openModal(
                    "Compétence transverce",
                    <span>
                        <Article headline="Persévérance" content={skillsTextsRender.renderPerseveranceArticleContent()} />
                    </span>,
                    [{name: "It'School", link: "it-school"}]
                );
                break;
            case "curiosity":
                this.props.openModal(
                    "Compétence transverce",
                    <span>
                        <Article headline="Curiosité" content ={skillsTextsRender.renderCuriosityArticleContent()} />
                    </span>,
                    [{name: "It'School", link: "it-school"}]
                )
            break;
            case "communication":
                this.props.openModal(
                    "Compétence transverce",
                    <span>
                        <Article headline="Vulgarisation du langage" content ={skillsTextsRender.renderCommunicationArticleContent()} />
                    </span>,
                    [{name: "It'School", link: "it-school"}]
                )
            break;
            case "teamSpirit":
                this.props.openModal(
                    "Compétence transverce",
                    <span>
                        <Article headline="Esprit d'équipe" content ={skillsTextsRender.renderTeamSpiritArticleContent()} />
                    </span>,
                    [{name: "It'School", link: "it-school"}]
                )
            break;
            default:
                this.props.openModal(
                    "nope",
                    "Compétence",
                    "Compétence à venir."
                );
        }
    }

    renderProjectListButtons() {
        return this.state.projectList.map(project => {
            return <div data-component="modal-project-list">
                    <h5>{this.state.projectList.length > 1 ? "Projets associés" : "Projet associé"}</h5>
                    <Link to={`/my-achievements/${project.link}`}><Button raised color="accent">{project.name}</Button></Link>
                </div>
        })
    }
}
