import React from 'react';
import Button from 'material-ui/Button';
import {Card} from "../../components/cards/index";
import Dialog, { DialogTitle, DialogContent, DialogContentText } from 'material-ui/Dialog';
import Collapse from 'material-ui/transitions/collapse';
import {capitalize} from "lodash";
import {Link} from "react-router";
import "./style.scss";


export class MySkillsView extends React.Component {

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

        } else {
            console.log("Hello people");
        }
    }

    render() {
        return(
            <div data-component="my-skills">
                <h3>Mes compétences</h3><br/>
                <div className="skills-cards">
                    <Card 
                        title="Créer une synergie" 
                        content="J'ai pu observer que je savais créer une synergie de compétences et de personnalités ..." 
                        onClick={() => this.openSkillModal("synergie") }
                        buttonName="Lire plus" />
                </div>
                <Dialog onRequestClose={this.handleRequestClose} open={this.state.isModalopen} transition={Collapse}>
                    <DialogTitle>{this.state.modalTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.state.modalContent}
                            <br/>
                            {this.renderProjectListButtons()}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    openSkillModal(type) {
        switch(type) {
            case "synergie":
                this.setState({
                    modalTitle: capitalize(type),
                    modalContent: "J’ai pu observer que je savais créer une synergie de compétences et de personnalités au sein d’un groupe de personnes dans lequel je peux me trouver." +
                    "En effet, j’ai compris que j’avais une aisance à collaborer avec mes camarades de classe ou mes collègues grâce à mon caractère. Cela me permet de créer des échanges et de facilité la mise en commun des tâches et des compétences." +
                    "Je me suis découvert des aptitudes à fédérer mon entourage afin d’aller vers un objectif commun. J’ai pu le constater lors de la gestion de projets informatique au sein de mon école, IN’TECH, durant lesquels j’ai eu à travailler avec des personnes ayant des tempéraments très différents. J’ai même parfois dû collaborer avec des personnes ayant des caractères incompatibles." + 
                    "Aussi, j’ai travaillé avec des personnes ayant des niveaux radicalement différents. Cela ne m’a pas empêché de créer une émulation afin que nous puissions travailler les uns avec les autres et d’établir une bonne ambiance de travail." +
                    "J’ai souvent su composer avec les moyens que j’avais à ma disposition afin d’instaurer une atmosphère de travail où chacun pouvait s’épanouir, s’exprimer et aider le projet à avancer afin que nous atteignons tous les objectif que nous nous étions donné en début de projet." +
                    "Je ne pensais pas que cela se reproduirait en entreprise, mais ce que j’ai pu constater est que les gens venaient aussi se référer à moi afin de me demander des conseils en termes d’organisation, de méthodologie ou encore techniques.",
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
