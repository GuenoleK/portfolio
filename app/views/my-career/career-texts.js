import React from 'react';

class CareerEventsTexts {

  renderKleeTwoContent() {
    return(
      <div className="klee-alternance">
          <h3 className="vertical-timeline-element-title">Développeur Full-Stack</h3>
          <h4 className="vertical-timeline-element-subtitle">KLEE GROUP (Projet client SoftBank Robotics)</h4><br/>

          <div className="event-text">
            Développement d’une plateforme de services, pour le client SoftBank Robotics, permettant de gérer l’ensemble des flottes de robots Pepper et NAO à travers le monde, dans une démarche agile et centrée utilisateur.<br/><br/>
            Les technologies utilisées sont Javascript (EcmaScript 6+), Java, SQL (PostgreSQL), Elastic Search, HTML5, CSS3, ReactJS et Mobx
          </div>
      </div>
    );
  }

  renderKleeOneContent() {
    return(
      <div className="klee-alternance">
          <h3 className="vertical-timeline-element-title">Développeur Front-End</h3>
          <h4 className="vertical-timeline-element-subtitle">KLEE GROUP (Equipe Focus)</h4><br/>

          <div className="event-text">
          Membre de l'équipe "Focus" pour un stage de 6 mois, celle-ci est responsable de la recherche et du développement d'une méthodologie UX et d'un framework industrialisé Javascript offrant des IHM et ergonomies optimisées au sein de templates, composants et plugins, destinés à la communauté open source.<br/><br/>
            Les langages et frameworks utilisés sont le Javascript (EcmaScript 6+), HTML5, CSS3, ReactJS, Redux, WebPack, Material Design, babel etc..
          </div>
      </div>
    );
  }

  renderIntechContent() {
    return(
      <div className="klee-alternance">
          <h3 className="vertical-timeline-element-title">Master Ingénierie Logiciel</h3>
          <h4 className="vertical-timeline-element-subtitle">IN'TECH</h4><br/>

          <div className="event-text">
            La ﬁlière Ingénierie du Logiciel forme des professionnels qui maîtrisent toutes les étapes de la conception et de la mise en œuvre d’un logiciel.
          </div>
      </div>
    );
  }

  renderBtsContent() {
    return(
      <div className="klee-alternance">
          <h3 className="vertical-timeline-element-title">BTS Management des Unités Commerciales (Marketing)</h3>
          <h4 className="vertical-timeline-element-subtitle">Lycée Guillaume Budée</h4><br/>

          <div className="event-text">
            Diplôme d'étude supérieur apprennant la base des techniques de vente et préparent à devenir chef de rayon.
          </div>
      </div>
    );
  }
}

export const careerEventsTexts = new CareerEventsTexts();
