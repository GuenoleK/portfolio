import React from 'react';
import {Article} from "../../components/article";
import {skillsTextsRender} from "./skills-texts";

class SkillsActions {
    technicalTitle = "Compétence technique : ";
    transversalTitle = "Compétence transverse : ";

    openJavascriptModal(openModal, type, name, renderProjectListButtons) {
        openModal(
            type,
            `${this.technicalTitle}${name}`,
            <span>
                <Article headline={name} content={skillsTextsRender.renderJavascriptArticleContent()} renderButtonSkillsSecction={renderProjectListButtons}/>
            </span>,
            [{name: "It'School", link: "it-school"}, {name: "Focus", link: "focus"}, {name: "Portfolio", link: "portfolio"}]
        )
    }

    openGitModal(openModal, type, name, renderProjectListButtons) {
        openModal(
            type,
            `${this.technicalTitle}${name}`,
            <span>
                <Article headline={name} content ={skillsTextsRender.renderGitArticleContent()} renderButtonSkillsSecction={renderProjectListButtons}/>
            </span>,
            [{name: "It'School", link: "it-school"}]
        )
    }

    openGitModal(openModal, type, name, renderProjectListButtons) {
        openModal(
            type,
            `${this.technicalTitle}${name}`,
            <span>
                <Article headline={name} content ={skillsTextsRender.renderGitArticleContent()} renderButtonSkillsSecction={renderProjectListButtons}/>
            </span>,
            [{name: "It'School", link: "it-school"}]
        )
    }

    openReactModal(openModal, type, name) {
        openModal(
            type,
            `${technicalTitle}${name}`,
            <span>
                <Article headline="Vulgarisation du langage" content ={skillsTextsRender.renderCommunicationArticleContent()} renderButtonSkillsSecction={this.renderProjectListButtons} />
            </span>,
            [{name: "It'School", link: "it-school"}]
        )
    }
}

export const skillsActions = new SkillsActions();
