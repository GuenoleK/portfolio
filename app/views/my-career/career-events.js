import React from 'react';

class CareerEventsTexts {

  renderKleeTwoContent() {
    return(
      <div className="klee-alternance">
          <h3 className="vertical-timeline-element-title">Développeur frontend/backend</h3>
          <h4 className="vertical-timeline-element-subtitle">KLEE GROUP (Mode projet)</h4><br/>

          <div className="event-text">
            Développeur sur un projet passionnant utilisant les langages Javascript pour le front-end et Java accompagné du SQL (avec Postegresql) pour le back-end.<br/><br/>

            Liste des langages, frameworks et librairies utilisées : <br/>
            Javascript (EcmaScript 6+), Java, SQL (Postegresl), HTML5, CSS3, ReactJS, Mobx, WebPack, Material Design, babel etc.
          </div>
      </div>
    );
  }

  renderKleeOneContent() {
    return(
      <div className="klee-alternance">
          <h3 className="vertical-timeline-element-title">Développeur frontend</h3>
          <h4 className="vertical-timeline-element-subtitle">KLEE GROUPE (Focus)</h4><br/>

          <div className="event-text">
            Membre de l'équipe "Focus" pour un stage de 6 mois, celle-ci se charge de la création d'IHM et met à disposition ses templates, composants et extensions au tout public.<br/><br/>
            Les langages et frameworks utilisés sont le Javascript (EcmaScript 6+), HTML5, CSS3, ReactJS, Redux, WebPack, Material Design, babel etc.
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
