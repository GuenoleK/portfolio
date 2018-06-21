import React from 'react';
import {Card} from "../../components/cards/index";
import {capitalize} from "lodash";
import {Link} from "react-router";
import {Article} from "../../components/article";
import {TechnicalSkills} from "./technical";
import {TransversalSkills} from "./transversal";
import {Slide, AppBar, Toolbar, IconButton, CloseIcon, Tooltip, Typography, Button, Collapse, Dialog, DialogTitle, DialogContent, DialogContentText} from "material-ui";
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
        window.scrollTo(0, 0)
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
        const headline = this.props.params.name === "technical" ? "Compétences techniques" : this.props.params.name === "transversal" ? "Compétences transverses" : "Mes compétences";
        return(
            <div data-component="my-skills">
                <Article headline={headline} content={this.skillsCardContent(this.props.params.name)} />
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
                            <br/>
                            {this.renderProjectListButtons()}
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
            return <TechnicalSkills router={this.props.router} openModal={this.openSkillModal}/>
        } else if (path === "transversal") {
            return <TransversalSkills router={this.props.router} openModal={this.openSkillModal}/>
        }

        return <div>Nope</div>
    }

    openSkillModal = (type, modalContent, projectList) => {
        this.setState({
            modalTitle: capitalize(type),
            modalContent,
            projectList
        });
        this.setState({isModalopen:true});
    }

    handleRequestClose = value => {
        console.log("Hello");
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
