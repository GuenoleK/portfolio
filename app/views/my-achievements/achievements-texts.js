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
                Cela permettra aussi de travailler en groupe, d’enseigner l’autonomie aux enfants, mais aussi qu’ils puissent apprendre à leur rythme tout en s’amusant à travers différentes activités ludiques.<br/><br/>

                Ce projet a été développé durant un an lors de ma 3e année de scolarité à IN’TECH.<br/>
                Afin de réaliser ce projet, nous étions une équipe de 3 développeurs.<br/>
                Ce projet a été présenté à une équipe de professeurs dans une école privée et à des enfants d’une classe.<br/>
                Le résultat est que notre application a énormément plu et que l’école souhaite faire une collaboration avec nous afin de mettre en place un module durant lequel les enfants pourraient profiter de cette application ludo-éducative. <br/>
                De plus, les professeurs souhaitent que nous puissions continuer à mettre à jour le contenu avec ce qu’ils peuvent nous transmettre en termes de fonctionnalités voulu et améliorations.<br/><br/>

                Ce projet a été une expérience unique qui m’a donné l’envie de me lancer dans la création d’une structure qui nous permettra, à moi et à mes camarades, de continuer de développer des projets ambitieux et utiles tels que celui-ci.<br/>
                Notre manque d’expérience professionnel nous a parfois porté préjudice lors du développement faisant que nous étions souvent dépassés par les événements et la charge de travail.<br/>
                Aujourd’hui, nous sommes tous apte et mieux gérer un projet de cette ampleur grâce aux différentes techniques de gestion et à nos compétences techniques que nous avons amélioré durant notre période d’alternance.
            </div>
        );
    }

    renderProxItiArticleContent() {
        return(
            
            <div className="prox-iti">
                L'association Proxité agit au coeur des quartiers populaires en faveur de l'insertion scolaire et professionnelle des jeunes, en leur proposant un accompagnement individuel par des bénévoles actifs dans le monde du travail.<br/>
                Notre objectif était, durant un semestre, d'attirer 5 à 10 jeunes dans l'association Proxité à Ivry-Sur-Sein par des actions de communications.<br/><br/>

                Nous étions une équipe de 4 personnes et nous avons usés de plusieurs moyens de communications pouvant permettre d’atteindre nos objectifs.<br/>
                Nous avons eu l’autorisation de plusieurs établissements afin de mettre en avant des affiches que nous avons nous-même crées, nous avons fait une communication en interne dans l’école afin que le bouche à oreille puisse aussi se faire dans les locaux de l’établissement et nous avons eu un stand lors de l’un des événements les plus important qu’est « Ivry en Fête ».<br/>
                Durant cet événement, les associations de la ville ont des stands dédiés afin de présenter leur activité aux passants. C’est là que nous avons eu le plus de retour et d’inscriptions pour l’association. C’était un franc succès.<br/><br/>

                L’intérêt de ce projet était non seulement d’aider l’association pour son ouverture dans la ville, mais aussi d’acquérir des compétences non techniques qui me servent encore aujourd’hui telles que la communication, l’esprit d’équipe ou encore la persévérance. 
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

    renderPortfolioArticleContent() {
        return(
            <div className="portfolio">
                C’est, notamment, le site sur lequel vous vous trouvez actuellement. <br/>
                C’est à la base un des documents à fournir à la fin de la 2e année de master. Il sert, entre autres, en partie à valider le master.<br/>
                Nous avions le choix de le faire soit avec un programme informatique (CMS : Content Managment System) qui permet de créer rapidement un site internet ou alors de le faire nous-même.<br/><br/>

                J’ai décidé de me lancer ce challenge afin de tester mes compétences de développeur et ma créativité. Souhaitant me spécialiser dans le développement Front-End, je me devais de relever ce défi.<br/>
                L’enjeu était donc de développer moi-même cet outil mais aussi de pouvoir le montrer aux yeux de tous afin d’être contacté directement via cette plateforme par des professionnels.<br/><br/>

                J’ai été totalement seul à développer mon portfolio. Je me suis cependant aidé du langage de programmation et de librairies que je préfère. Soit le JavaScript accompagné des différentes librairies JavaScript qui m’ont permis de créer différents composants web et effets qui se trouvent sur le site.<br/><br/>

                Je suis fier de voir ce site en ligne, que je maintiendrai à jour et que je peux présenter auprès de ceux qui veulent voir ce que je sais faire. De plus, le site est open-source et disponible sur GitHub.<br/>
                Je mets donc à disposition mon portfolio afin de recevoir des avis qui pourraient m’aider à améliorer ce que j’ai fait.<br/><br/>

                J’ai étalé le développement de mon portfolio sur mes 2 ans de master. Je pense que je pourrai, à l’avenir, prendre le temps exact que je passe à développer un outil afin de pouvoir améliorer mes performances et savoir en combien de temps je peux exécuter certaines tâches.<br/>
            </div>
        );
    }
}

export const achievementsTextsRender = new AchievementsTextsRender();
