import React, {PureComponent} from 'react';
import {Card} from "../../components/cards/index";
import {capitalize} from "lodash";
import {Link} from "react-router";
import "./style.scss";
import {Article} from "../../components/article";
import {Collapse as MUICollapse, Button, Dialog, DialogTitle, DialogContent, DialogContentText} from 'material-ui'

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
        window.scrollTo(0, 0)
        const {name} = this.props.router.params
        if(name !== "all") {
            switch(name) {
                case "it-school":
                    this.openAchievementModal("it'school");
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        return(
            <div data-component="my-achievements">
                <Article headline="Mes réalisations" content={this.achivementCardContent()} />

                <Dialog onRequestClose={this.handleRequestClose} open={this.state.isModalopen} transition={MUICollapse}>
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

    achivementCardContent() {
        return(
            <div className="achievements-cards">
                <Card 
                    title="It'School" 
                    content="Au sein des écoles, les institutrices sont souvent confrontées à des problèmes logistiques ..." 
                    onClick={() => this.openAchievementModal("it'school") }
                    buttonName="Lire plus" />
            </div>
        )
    }

    openAchievementModal(type) {
        switch(type) {
            case "it'school":
                this.setState({
                    modalTitle: capitalize(type),
                    modalContent:
                    <span>
                        Au sein des écoles, les institutrices sont souvent confrontées à des problèmes logistiques tels que l’utilisation conséquente de papier et d’encre pour imprimer leurs exercices.
                        Afin de se passer du support papier, notre but est de matérialiser les exercices créés par les enseignants au format numérique comme le coloriage, les jeux de course, memory, etc.
                        <br/>
                        La préparation des supports d’exercices sera simplifiée et permettra un gain de temps.
                        Ainsi, les maîtresses pourront utiliser des exercices crées au préalables ou générer leurs propres exercices. 
                        Elles pourront évaluer le niveau des élèves afin de les orienter dans les révisions. 
                        Cela permettra aussi de travailler en groupe, d’enseigner l’autonomie aux enfants, mais aussi qu’ils puissent apprendre à leur rythme tout en s’amusant à travers différentes activités ludiques.
                    </span>,
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
