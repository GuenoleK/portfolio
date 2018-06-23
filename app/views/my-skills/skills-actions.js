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
            [{name: "It'School", link: "it-school"}, {name: "Focus", link: "focus"}, {name: "Portfolio", link: "portfolio"}]
        )
    }

    openReactModal(openModal, type, name, renderProjectListButtons) {
        openModal(
            type,
            `${this.technicalTitle}${name}`,
            <span>
                <Article headline={name} content ={skillsTextsRender.renderReactArticleContent()} renderButtonSkillsSecction={renderProjectListButtons} />
            </span>,
            [{name: "It'School", link: "it-school"}, {name: "Focus", link: "focus"}, {name: "Portfolio", link: "portfolio"}]
        );
    }

    openCSharpModal(openModal, type, name, renderProjectListButtons) {
        openModal(
            type,
            `${this.technicalTitle}${name}`,
            <span>
                <Article headline={name} content ={skillsTextsRender.renderCSharpArticleContent()} renderButtonSkillsSecction={renderProjectListButtons}/>
            </span>,
            [{name: "It'School", link: "it-school"}]
        );
    }

    openSqlModal(openModal, type, name, renderProjectListButtons) {
        openModal(
            type,
            `${this.technicalTitle}${name}`,
            <span>
                <Article headline={name} content ={skillsTextsRender.renderSqlArticleContent()} renderButtonSkillsSecction={renderProjectListButtons}/>
            </span>,
            [{name: "It'School", link: "it-school"}]
        );
    }

    openPerseveranceModal(openModal, type, name, renderProjectListButtons) {
        openModal(
            type,
            `${this.technicalTitle}${name}`,
            <span>
                <Article headline="Persévérance" content={skillsTextsRender.renderPerseveranceArticleContent()} renderButtonSkillsSecction={renderProjectListButtons}/>
            </span>,
            [{name: "It'School", link: "it-school"}]
        );
    }

    openCuriosityModal(openModal, type, name, renderProjectListButtons) {
        openModal(
            type,
            `${this.technicalTitle}${name}`,
            <span>
                <Article headline="Curiosité" content={skillsTextsRender.renderCuriosityArticleContent()} renderButtonSkillsSecction={renderProjectListButtons}/>
            </span>,
            [{name: "It'School", link: "it-school"}, {name: "Focus", link: "focus"}, {name: "Portfolio", link: "portfolio"}, {name: "Prox'ITI", link: "prox-iti"}]
        );
    }

    openCommunicationModal(openModal, type, name, renderProjectListButtons) {
        openModal(
            type,
            `${this.technicalTitle}${name}`,
            <span>
                <Article headline="Vulgarisation du langage" content={skillsTextsRender.renderCommunicationArticleContent()} renderButtonSkillsSecction={renderProjectListButtons}/>
            </span>,
            [{name: "It'School", link: "it-school"}]
        );
    }

    openTeamSpiritModal(openModal, type, name, renderProjectListButtons) {
        openModal(
            type,
            `${this.technicalTitle}${name}`,
            <span>
                <Article headline="Esprit d'équipe" content={skillsTextsRender.renderTeamSpiritArticleContent()} renderButtonSkillsSecction={renderProjectListButtons}/>
            </span>,
            [{name: "It'School", link: "it-school"}, {name: "Focus", link: "focus"}, {name: "Prox'ITI", link: "prox-iti"}]
        );
    }
}

export const skillsActions = new SkillsActions();
