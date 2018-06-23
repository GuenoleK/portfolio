import React, {PureComponent} from 'react';
import "./style.scss";
import {ComingSoon} from "../../components/coming-soon";
import {Article} from "../../components/article";
import { Timeline } from 'react-material-timeline';
import { Avatar, Icon } from '@material-ui/core';

export class MyCareerView extends PureComponent {

    events = [
        {
          title: 'Event 1',
          subheader: new Date().toString(),
          description: [ 'Some description for event 1' ],
          icon: <Avatar><Icon>work</Icon></Avatar>,
        },
        {
          title: 'Event 2',
          subheader: new Date().toString(),
          description: [ 'Some description for event 2' ],
          icon: <Avatar><Icon>home</Icon></Avatar>,
        }
    ];

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <div data-component="my-career">
                <Article headline="Mon expérience" content={this.articleContent()} />
                {/* <ComingSoon title="Mon expérience" description="La page dans laquelle je fais le récit de l'ensemble de mes expériences informatiques est actuellement en cours de construction." /> */}
            </div>
        );
    }

    renderTimeline() {
    }

    articleContent() {
        return <Timeline events={this.events}/>;
    }
}
