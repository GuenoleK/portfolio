import React, {PureComponent} from 'react';
import "./style.scss";
import {ComingSoon} from "../../components/coming-soon";

export class AboutMeView extends PureComponent {

    render() {
        return(
            <div data-component="about-me">
                <ComingSoon title="Qui suis-je ?" description="La page dans laquelle je décris mes traits de personnalité, centres d'intérêts et ambitions est en cours de construction." />
            </div>
        );
    }
}
