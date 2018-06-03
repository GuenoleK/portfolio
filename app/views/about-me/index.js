import React, {PureComponent} from 'react';
import "./style.scss";
import {Article} from "../../components/article";

export class AboutMeView extends PureComponent {

    render() {
        return(
            <div data-component="about-me">
                <Article headline="Ma passion, mon métier, ma vie" content={this.articleContent()} />
                {/* <ComingSoon title="Qui suis-je ?" description="La page dans laquelle je décris mes traits de personnalité, centres d'intérêts et ambitions est en cours de construction." /> */}
            </div>
        );
    }

    articleContent() {
        return(
            <div>
                <div>
                    {/* LA GROSSE PHOTO A METTRE ICI !!! */}
                </div>
                "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. "
                <br/>- Albert Shweitzer
                <br/><br/>
                Ma motivation la plus profonde est d’aider la vie de ceux qui m’entourent et plus globalement d’aider la vie des êtres humains en créant des outils permettant la familiarisation avec les nouvelles technologies dans leur quotidien.
                <br/>
                L'être humain est important, selon moi, et cela même pour le métier de l'informatique. Dans une ère où l'évolution technologique prime, j'aime participer à l'amélioration du quotidien grâce à mon métier.
                <br/><br/>
                Comme la citation donnée plus haut le dit, le bonheur est la clé du succès. J'aime collaborer avec les gens et travailler dans des équipes stimulantes et créatives. J'aime aider au renforcement ou à la création de la synergie des équipes avec lesquelles je travaille. La collaboration, le développement des relations humaines et la stimulation créative m'aident à avoir ce bonheur de travailler en entreprise.
                <br/><br/>
                Je suis quelqu'un de passionné, curieux et j'aime apprendre et acquérir de nouvelles compétences.
                <br/>
                Cela ne s’arrête pas à l’informatique. J’aime apprendre et découvrir de manière générale. Je le fais à travers la musique (écoutée ou pratiquée), les films, les séries, ou encore les comics.
                La réalisation de vidéos, l’éditions de photos ou la découvertes de nouvelles technologies sont des choses qui me fascinent et vers lesquelles je me tourne lorsque le temps me le permet. 
                <br/><br/>
                Le bonheur est pour moi la clé et je suis convaincu que cela m'aidera à m'épanouir et à évoluer dans ma vie, tant professionnelle que personnelle.         
            </div>
        )
    }
}
