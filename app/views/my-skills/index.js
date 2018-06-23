import React from 'react';
import {Card} from "../../components/cards/index";
import {capitalize} from "lodash";
import {Link} from "react-router";
import {Article} from "../../components/article";
import {TechnicalSkills} from "./technical";
import {TransversalSkills} from "./transversal";
import {Slide, AppBar, Toolbar, IconButton, Typography, Button, Collapse, Dialog, DialogTitle, DialogContent, DialogContentText} from "material-ui";
import "./style.scss";

export class MySkillsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalopen: false,
            modalContent: "Simple skill modal content.",
            modalTitle: "Modal title",
            projectList: [],
            currentPath: `/my-skills/${this.props.params.name}/`
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0)
        const {name} = this.props.router.params
        switch(name) {
            case "javascript":
                this.openSkillModal("javascript");
                break;
            case "git":
                this.openSkillModal("git");
                break;
            default:
                break;
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
            return <TechnicalSkills router={this.props.router} openModal={this.openSkillModal} projectList={this.state.projectList}/>
        } else if (path === "transversal") {
            return <TransversalSkills router={this.props.router} openModal={this.openSkillModal} projectList={this.state.projectList}/>
        }

        return <div>Nope</div>
    }

    openSkillModal = (type, modalTitle, modalContent, projectList) => {
        this.skillsNavigation(type)
        this.setState({
            modalTitle,
            modalContent,
            projectList
        });
        this.setState({isModalopen:true});
    }

    handleRequestClose = value => {
        this.setState({ isModalopen: false });
        this.skillsNavigation("all")
    };
    
    skillsNavigation(path) {
        this.props.router.push(`${this.state.currentPath}${path}`);
    }
}
