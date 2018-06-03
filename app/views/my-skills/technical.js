import React from 'react';
import Button from 'material-ui/Button';
import {Card} from "../../components/cards/index";
import Dialog, { DialogTitle, DialogContent, DialogContentText } from 'material-ui/Dialog';
import Collapse from 'material-ui/transitions/collapse';
import {capitalize} from "lodash";
import {Link} from "react-router";
import {Article} from "../../components/article";
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

    componentWillMount() {
        const {name} = this.props.router.params
        if(name !== "all") {
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
                    title="Javascript" 
                    content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
                    onClick={() => this.openSkillModal("synergie") }
                    buttonName="Lire plus" />
                <Card 
                    title="C#" 
                    content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
                    onClick={() => this.openSkillModal("synergie") }
                    buttonName="Lire plus" />
                <Card 
                    title="SQL" 
                    content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
                    onClick={() => this.openSkillModal("synergie") }
                    buttonName="Lire plus" />
                <Card 
                    title="TEST" 
                    content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
                    onClick={() => this.openSkillModal("synergie") }
                    buttonName="Lire plus" />
                <Card 
                    title="TEST" 
                    content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
                    onClick={() => this.openSkillModal("synergie") }
                    buttonName="Lire plus" />
            </div>
        );
    }

    openSkillModal(type) {
        switch(type) {
            case "synergie":
                this.setState({
                    modalTitle: capitalize(type),
                    modalContent: 
                    <span>
                        <h5>« Fédérer mon entourage afin d’aller vers un objectif commun »</h5>
                        J’ai pu observer que je savais créer une synergie de compétences et de personnalités au sein d’un groupe de personnes dans lequel je peux me trouver.
                        <br/>
                        En effet, j’ai compris que j’avais une aisance à collaborer avec mes camarades de classe ou mes collègues grâce à mon caractère. Cela me permet de créer des échanges et de faciliter la mise en commun des tâches et des compétences. Je me suis découvert des aptitudes à fédérer mon entourage afin d’aller vers un objectif commun.

                        <h5>« Fédérer mon entourage afin d’aller vers un objectif commun »</h5>
                        « Créer une émulation afin que de pouvoir travailler les uns avec les autres »
                        J’ai pu le constater lors de la gestion de projets informatique au sein de mon école, IN’TECH, durant lesquels j’ai eu à travailler avec des personnes ayant des tempéraments très différents. J’ai même parfois dû collaborer avec des personnes ayant des caractères incompatibles.
                        <br/>
                        Aussi, j’ai travaillé avec des personnes ayant des niveaux radicalement différents. Cela ne m’a pas empêché de créer une émulation afin que de pouvoir travailler les uns avec les autres et d’établir une bonne ambiance de travail.

                        <h5>« Fédérer mon entourage afin d’aller vers un objectif commun »</h5>
                        « Je ne pensais pas que cela se reproduirait en entreprise »
                        <br/>
                        J’ai souvent su composer avec les moyens que j’avais à ma disposition afin d’instaurer une atmosphère de travail où chacun pouvait s’épanouir, s’exprimer et aider le projet à avancer afin que nous atteignons tous les objectif que nous nous étions donné en début de projet. Je ne pensais pas que cela se reproduirait en entreprise, mais ce que j’ai pu constater est que les gens venaient aussi se référer à moi afin de me demander des conseils en termes d’organisation, de méthodologie ou encore techniques.

                        <h5>« Fédérer mon entourage afin d’aller vers un objectif commun »</h5>
                        « Avoir une plus grosse connaissance technique et organisationnelle en générale »
                        <br/>
                        Je pense qu’aujourd’hui j’ai une réelle facilité à comprendre les compétences et capacités que mes collègues et camarades possèdent. Ce qu’il me manque aujourd’hui c’est d’avoir une plus grosse connaissance technique et organisationnelle en générale afin d’exploiter complètement toute ces aptitudes.
                    </span>,
                    projectList: [{name: "It'School", link: "it-school"}]
                });
                break;
            default:
                this.setState({
                    modalTitle: "Compétence",
                    modalContent: "Compétence à venir."
                });

        }
        this.setState({isModalopen:true});
    }

    handleRequestClose = value => {
        this.setState({ isModalopen: false });
    };

    renderProjectListButtons() {
        return this.state.projectList.map(project => {
            return <div data-component="modal-project-list">
                    <h5>{this.state.projectList.length > 1 ? "Projets associés" : "Projet associé"}</h5>
                    <Link to={`/my-achievements/${project.link}`}><Button raised color="accent">{project.name}</Button></Link>
                </div>
        })
    }
}
