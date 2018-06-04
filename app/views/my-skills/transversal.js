import React from 'react';
import Button from 'material-ui/Button';
import {Card} from "../../components/cards/index";
import Dialog, { DialogTitle, DialogContent, DialogContentText } from 'material-ui/Dialog';
import Collapse from 'material-ui/transitions/collapse';
import {capitalize} from "lodash";
import {Link} from "react-router";
import {Article} from "../../components/article";
import "./style.scss";


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
        const {name} = this.props.router.params
        if(name !== "transversal") {
            switch(name) {
                case "synergy":
                    this.openSkillModal("synergie");
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        return(
            <div className="skills-cards">
                <Card 
                    title="Créer une synergie" 
                    content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
                    onClick={() => this.openSkillModal("synergie") }
                    buttonName="Lire plus" />
            </div>
        );
    }

    openSkillModal(type) {
        switch(type) {
            case "synergie":
                this.props.openModal(
                    type,
                    <span>
                        <h5>« Fédérer mon entourage afin d’aller vers un objectif commun »</h5>
                        J’ai pu observer que je savais créer une synergie de compétences et de personnalités au sein d’un groupe de personnes dans lequel je peux me trouver.
                        <br/>
                        En effet, j’ai compris que j’avais une aisance à collaborer avec mes camarades de classe ou mes collègues grâce à mon caractère. Cela me permet de créer des échanges et de faciliter la mise en commun des tâches et des compétences. Je me suis découvert des aptitudes à fédérer mon entourage afin d’aller vers un objectif commun.
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

    renderProjectListButtons() {
        return this.state.projectList.map(project => {
            return <div data-component="modal-project-list">
                    <h5>{this.state.projectList.length > 1 ? "Projets associés" : "Projet associé"}</h5>
                    <Link to={`/my-achievements/${project.link}`}><Button raised color="accent">{project.name}</Button></Link>
                </div>
        })
    }
}
