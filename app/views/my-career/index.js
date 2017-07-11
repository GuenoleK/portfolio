import React, {PureComponent} from 'react';
import "./style.scss";
import {ComingSoon} from "../../components/coming-soon";

export class MyCareerView extends PureComponent {

    render() {
        return(
            <div data-component="my-career">
                <ComingSoon title="Mon expérience" description="La page dans laquelle je fais le récit de l'ensemble de mes expériences informatiques est actuellement en cours de construction." />
            </div>
        );
    }
}
