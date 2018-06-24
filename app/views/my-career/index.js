import React, {PureComponent} from 'react';
import "./style.scss";
import {ComingSoon} from "../../components/coming-soon";
import {Article} from "../../components/article";
import { Avatar, Icon } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {careerEventsTexts} from "./career-events";
import {momentUtil} from "../../utils/moment";

export class MyCareerView extends PureComponent {

    date = momentUtil.date();

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <div data-component="my-career">
                <Article headline="Mon expérience" content={this.articleContent()} />
            </div>
        );
    }

    articleContent() {
        return(
            <div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={`Mars 2017 - Aujour'd'hui (${this.date([2017, 3]).fromNow(true)})`}
                        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                        icon={<WorkIcon />}
                    >
                        {careerEventsTexts.renderKleeTwoContent()}
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={`Février 2016 - Mars 2O17 (${this.date([2017, 3]).from([2016, 2,], true)})`}
                        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                        icon={<WorkIcon />}
                    >
                        {careerEventsTexts.renderKleeOneContent()}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={`2013 - 2018 (${this.date([2013]).from([2018,], true)})`}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        {careerEventsTexts.renderIntechContent()}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={`2009 - 2011 (${this.date([2009]).from([2011], true)})`}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        {careerEventsTexts.renderBtsContent()}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<EventSeatIcon />}
                    />
                </VerticalTimeline>
            </div>
        );
    }
}
