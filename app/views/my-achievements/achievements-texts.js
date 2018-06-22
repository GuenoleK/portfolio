import React from 'react';

class AchievementsTextsRender {

    renderItSchoolArticleContent() {
        return(
            
            <div className="it-school">
                Au sein des écoles, les institutrices sont souvent confrontées à des problèmes logistiques tels que l’utilisation conséquente de papier et d’encre pour imprimer leurs exercices.<br/>
                Afin de se passer du support papier, notre but est de matérialiser les exercices créés par les enseignants au format numérique comme le coloriage, les jeux de course, memory, etc.<br/><br/>

                La préparation des supports d’exercices sera simplifiée et permettra un gain de temps.<br/>
                Ainsi, les maîtresses pourront utiliser des exercices crées au préalables ou générer leurs propres exercices. <br/>
                Elles pourront évaluer le niveau des élèves afin de les orienter dans les révisions. <br/>
                Cela permettra aussi de travailler en groupe, d’enseigner l’autonomie aux enfants, mais aussi qu’ils puissent apprendre à leur rythme tout en s’amusant à travers différentes activités ludiques.
            </div>
        );
    }

    renderProxItiArticleContent() {
        return(
            
            <div className="prox-iti">
                L'association Proxité agit au coeur des quartiers populaires en faveur de l'insertion scolaire et professionnelle des jeunes, en leur proposant un accompagnement individuel par des bénévoles actifs dans le monde du travail.<br/>
                Notre objectif était, durant un semestre, d'attirer 5 à 10 jeunes dans l'association Proxité à Ivry-Sur-Sein par des actions de communications.
            </div>
        );
    }
}

export const achievementsTextsRender = new AchievementsTextsRender();
