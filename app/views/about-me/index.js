import React, {PureComponent} from 'react';
import "./style.scss";
import {Article} from "../../components/article";
import { Parallax } from 'react-parallax';
import {Card} from "../../components/cards";

export class AboutMeView extends PureComponent {

    componentDidMount() {
        scrollTo(0,0);
    }

    render() {
        return(
            <div data-component="about-me">
                <Parallax className="home-intro" bgImage={require('../../assets/style_imagery_bestpractices_narrative1.png')} strength={400}>
                    <Card 
                        content={
                            <span>
                                Qui suis-je ?
                            </span>
                        }
                        type="home"
                    />
                    <div className="fullscreen-header__pointer material-icons">expand_more</div>
                </Parallax>
                <Article headline={undefined} content={this.articleContent()} />
            </div>
        );
    }

    articleContent() {
        return(
            <div>
                <h3>Ma vision d'un monde technologique</h3>
                Développeur Front-End, spécialisé en JavaScript, je suis passionné par le partage et les valeurs humaines au sein d’une entreprise.<br/>
                Dans ma vie personnelle, comme dans mon environnement professionnel, je suis jovial, avenant, sérieux, drôle et persévérant.<br/>
                Passionné par les nouvelles technologies, j’ai toujours voulu participer à cet univers en devenant développeur informatique. Aujourd’hui je suis pleinement acteur dans ce secteur en ayant fait d’une de mes passions mon métier. A travers ce métier, je peux vivre et véhiculer mes valeurs.<br/>
                J’ai découvert que j’ai besoin de m’épanouir humainement dans l’environnement dans lequel je me trouve et de pouvoir y retrouver les valeurs que je prône. Que ce soit le partage, l’entraide ou encore la bienveillance, je retrouve tous ces éléments dans ce que je fais dans mon métier et dans les équipes dans lesquelles j’évolue.<br/><br/>

                <h3>Mon concept clé</h3>
                "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. "<br/>
                - Albert Shweitzer<br/><br/>

                L'être humain est important, selon moi, et cela même pour le métier de l'informatique.<br/>
                Dans une ère où l'évolution technologique prime, j'aime participer à l'amélioration du quotidien grâce à mon métier.<br/>
                Le bonheur est pour moi la clé et je suis convaincu que cela m'aidera à m'épanouir et à évoluer dans ma vie, tant professionnelle que personnelle.<br/><br/>

                <h3>Des projets plein la tête</h3>
                Le développement front-end est, dans mon métier, ce vers quoi j'ai une attirance naturelle.<br/>
                Mon désire est de me spécialiser dans cette voie afin de pouvoir concevoir des applications qui ressemblent au besoin du client de la manière la plus moderne et simple qu'il soit.<br/>
                Ma spécialisation me permettra aussi de pouvoir partager mes connaissances au sein d'une équipe mais me permettra aussi de pouvoir comprendre et conseiller les entreprises avec lesquelles je serai amené à travailler.<br/><br/>

                <ul>
                    <li>
                        <h4>Ma vision de demain</h4> 
                        J'aimerais pouvoir aider les structures associatives et éducatives à ne pas se faire haper par cette transition au numérique.<br/>
                        J'ai eu l'occasion de collaborer avec une école à laquelle moi, et mes camarades de projet, avons pu proposer une solution à cette transition.<br/>
                        Cela m'a conforter dans mon idée et aujourd'hui je suis convaincu du besoin qui existe et du rôle que je peux jouer pour des structures qui sont trop peu informées et qui ne savent pas vraiment vers qui se tourner.
                    </li>
                </ul><br/>

                <h3>Au-delà des lignes de code</h3>
                Outre l'informatique, j'ai besoin d'avoir d'autres centres d'intétêt afin de m'épanouir dans ma vie.<br/><br/>

                <ul>
                    <li>
                        <h4>Inspiration</h4>
                        Mon esprit a constamment besoin d'être alimenté, d'être inspiré et de produire.<br/>
                        La musique me permet celà. Elle me donne l'occasion de m'exprimer, de partager mes pensés et d'être créatif. Cela fait maintenant 10 ans que j'en fais et je découvre toujours plus à chaque fois que j'en produit.<br/>
                        La technologie n'est pas loin pour inspirée mon esprit. J'aime en effet voir l'évolution des smartphones et des interfaces utilisateurs. C'est vraiment quelque chose qui me passionne.<br/>
                        J'ai l'occasion de regarder des TED talks ou participer à des meetups de sujets divers qui me permettent de découvrir sur bien des sujets.
                    </li>
                </ul><br/>

                <ul>
                    <li>
                        <h4>Détente</h4>
                        Ma première console était la NES et depuis, les jeux vidéos n'ont plus quitté ma vie.<br/>
                        FIFA, Super Smash Bros, Mario Kart ou encore NBA 2K font parti des jeux auxquels j'aime jouer en solo ou avec des amis. Suis-je fort ? Là n'est pas la question, je pense que l'important c'est de participer...<br/>
                        Les mangas, les séries, les films, la musiques et regarder les nuages font partie des activités qui me permettent de contempler et apprécier une oeuvre que se déroule devant moi.
                    </li>
                </ul><br/>

                <ul>
                    <li>
                        <h4>M'évader et me ressourcer</h4>
                        J'ai eu l'occasion de voyager aux Etats-Unis, en Suisse, aux Royaumes-Unis ou encore en Espagne, mais cela ne me suffit clairement pas.<br/>
                        Voyager et découvrir de nouvelles cultures sont des choses qui me stimulent et me permettent de m'évader de mon quotidien.<br/>
                        J'aime énormément profiter de mes proches, de ceux que j'aime et ceux qui m'entourent afin de me ressourcer dans un monde qui va très vite. Je trouve important de ne pas perdre ce contact humain qui est simple mais essentiel pour moi.
                    </li>
                </ul><br/>
            </div>
        )
    }
}
