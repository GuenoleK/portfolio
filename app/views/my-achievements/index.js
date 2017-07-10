import React, {PureComponent} from 'react';
import Button from 'material-ui/Button';
import {Card} from "../../components/cards/index";
import Collapse from 'material-ui/transitions/collapse';
import {capitalize} from "lodash";
import Dialog, { DialogTitle, DialogContent, DialogContentText } from 'material-ui/Dialog';
import {Link} from "react-router";
import "./style.scss";

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
        const {name} = this.props.router.params
        if(name !== "all") {
            switch(name) {
                case "it-school":
                    this.openAchievementModal("it'school");
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
            <div data-component="my-achievements">
                <h3>Mes réalisations</h3>
                <div className="achievements-cards">
                    <Card 
                        title="It'School" 
                        content="Au sein des écoles, les institutrices sont souvent confrontées à des problèmes logistiques ..." 
                        onClick={() => this.openAchievementModal("it'school") }
                        buttonName="Lire plus" />
                </div>

                <Dialog onRequestClose={this.handleRequestClose} open={this.state.isModalopen} transition={Collapse}>
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

    openAchievementModal(type) {
        switch(type) {
            case "it'school":
                this.setState({
                    modalTitle: capitalize(type),
                    modalContent: "Au sein des écoles, les institutrices sont souvent confrontées à des problèmes logistiques tels que l’utilisation conséquente de papier et d’encre pour imprimer leurs exercices." + 
                    "Afin de se passer du support papier, notre but est de matérialiser les exercices créés par les enseignants au format numérique comme le coloriage, les jeux de course, memory, etc." +
                    "La préparation des supports d’exercices sera simplifiée et permettra un gain de temps." +
                    "Ainsi, les maîtresses pourront utiliser des exercices crées au préalables ou générer leurs propres exercices. Elles pourront évaluer le niveau des élèves afin de les orienter dans les révisions. Cela permettra aussi de travailler en groupe, d’enseigner l’autonomie aux enfants, mais aussi qu’ils puissent apprendre à leur rythme tout en s’amusant à travers différentes activités ludiques.",
                    skillList: [{name: "synergie", link: "synergy"}]
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
