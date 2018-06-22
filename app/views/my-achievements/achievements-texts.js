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

    renderFocusArticleContent() {
        return(
            
            <div className="focus">
                Lors de mon stage de 3e année d’étude (Février-Août 2016) j’ai intégré l’équipe Focus qui a été un pôle « Innovation » au sein de KLEE Group.<br/>
                Au sein de cette équipe, j’ai aidé au développement et  à la maintenance des librairies techniques qui étaient mises en place pour aider à la productivité des développeurs et à un ensemble de bonnes pratiques qui aident à faire du développement moderne.<br/>
                La méthode de travail est la méthode agile SCRUM au sein de cette équipe qui permet de travailler sous forme itérative. Cette période itérative est une période appelée sprint, c’est une période intensive de travail et de production.<br/><br/>

                <h4>Focus-Components</h4>
                Focus-Components est une librairie open-source de composants web. Ils sont essentiellement réalisés avec le framework ReactJS et donc codés essentiellement en JavaScript. Le but de cette librairie est de créer des composants web prêts à l’utilisation sur des projets.<br/>
                L’ensemble des technologies que j’ai utilisé sont donc : <br/>
                <ul>
                    <li><b>Git :</b> grâce à git, nous pouvions avoir un historique du travail fourni, donc avoir les différentes versions de ce qui était fait et livré. Pour faciliter cela, nous avons utilisé le site GitHub qui est un hébergeur  du développement fourni.</li>
                    <li>
                        <b>JavaScript :</b> c’est le langage qui était globalement utilisé au sein du développement de la librairie et de la gestion du composant.
                        <ul>
                            <li>Pour la partie « rendu » du composant, c’est le framework ReactJS, développé par Facebook, qui a été utilisé. De plus le framework SASS (extension de CSS3), permet de variabiliser le CSS.</li>
                            <li>Concernant le packaging de la librairie pour son utilisation au sein des projets, c’est la librairie Webpack qui nous permettant de rassembler l’ensemble du code fourni en un seul et même fichier de package.</li>
                        </ul>
                    </li>
                </ul><br/>

                <h4>Centre d’aide Focus</h4>
                Pour ce projet, j’étais en binôme avec un des membres du projet pour lequel cette application avait été vendue. Nous avons travaillé de manière agile, en gardant la méthode SCRUM.<br/>
                Pour les technologies utilisées, nous sommes globalement restés sur celles utilisées par mon équipe.<br/>
                <ul>
                    <li>Pour les technologies côté vue, nous avons utilisé le JavaScript, ReactJS et Redux pour la partie de synchronisation de l’application. Le TypeScript a été utilisé afin de typer le JavaScript et d’avoir un contrôle plus poussé, donnant accès aussi à de la documentation simplifiée sur le code. Un framework de test appelé Enzyme a été mis en place pour les tests unitaires côté Front-End.</li>
                    <li>NodeJS pour la partie serveur permettant le lancement de l’application</li>
                    <li>Sequelize qui est un ORM JavaScript. ORM signifie Object-Relationnal-Mapping. C’est une technique de programmation qui permet de créer une base de données orientée objet à partir d’une base de données relationnelle.
                J’ai beaucoup appris tout le long de l’élaboration de ce projet. Il y a des choses que je ne savais pas faire, mais cela était normal car le cursus scolaire ne permet pas de tout voir. Il y a des choses que l’on apprend une fois en entreprise et mes collègues me l’ont rappelé. Ils m’ont aidé à gérer la pression en me rappelant qu’ils étaient là pour que j’apprenne. Cela a été efficace car j’ai pu beaucoup observer, consolider mes connaissances en reactJS et javascript et ai pu faire de la programmation orientée objet avec le TypeScript qui était utilisé pour définir les modèles de base de données entre autres.</li>
                </ul><br/>
                J’ai donc développé en binôme pendant 25 jours et durant le mois restant j’ai dû être autonome, tout en gardant les conseils de mes responsables.<br/>
                Nous avons pu arriver au bout de ce qui avait été défini. N’ayant pas l’application du client, nous avons intégré l’extension dans Focus Demo afin de voir comment cela rendait.<br/>
            </div>
        );
    }
}

export const achievementsTextsRender = new AchievementsTextsRender();
