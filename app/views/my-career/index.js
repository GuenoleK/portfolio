import React, {PureComponent} from 'react';
import "./style.scss";
import {ComingSoon} from "../../components/coming-soon";
import {Article} from "../../components/article";

export class MyCareerView extends PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <div data-component="my-career">
                {/* <Article headline="Mon expérience" content={this.articleContent()} /> */}
                <ComingSoon title="Mon expérience" description="La page dans laquelle je fais le récit de l'ensemble de mes expériences informatiques est actuellement en cours de construction." />
            </div>
        );
    }

    articleContent() {
        return(
            <div>Hello</div>
        )
    }
}
