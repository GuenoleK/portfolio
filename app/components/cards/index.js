import React, {PureComponent} from "react";
import Button from 'material-ui/Button';
import {Link} from "react-router";
import {CircularProgress } from "material-ui";
import "./style.scss";

export class Card extends PureComponent {

    state = {
        completed: 0,
        skillLevelIndicator: 0
    };

    timer;
    skillLevelTimer;

    componentDidMount() {
        if(this.props.skillLevel) {
            this.timer = setInterval(() => this.progressProgrssBarIndicator(), 20);
            this.skillLevelTimer = setInterval(() => this.progressSkillLevelIndicator(), 15);
        }
    }

    componentWillUnmount() {
        if(this.props.skillLevel) {
            clearInterval(this.timer);
            clearInterval(this.skillLevelTimer);
        }
    }

    progressProgrssBarIndicator() {
        const { completed } = this.state;

        // The progress bar seems to have + 10 value compared to what we indicate it
        this.setState({
            completed: completed === this.props.skillLevel - 10 ? completed : completed + 1
        });
    };

    progressSkillLevelIndicator() {
        const { skillLevelIndicator } = this.state;
        this.setState({
            skillLevelIndicator: skillLevelIndicator === this.props.skillLevel ? skillLevelIndicator : skillLevelIndicator + 1,
        });
    };

    renderButtons() {
        return this.props.buttonProps.map(({buttonName, link, onClick}) => {
            const cardButton = <Button color="primary" onClick={onClick}>{buttonName}</Button>
            const linkCardButton = <Button raised color="primary" onClick={onClick}>{buttonName}</Button>
            return link ?  <Link to={link}>{linkCardButton}</Link> : cardButton;
        })
    }


    renderButton() {
        const cardButton = <Button color="primary" onClick={this.props.onClick}>{this.props.buttonName}</Button>
        const linkCardButton = <Button raised color="primary" onClick={this.props.onClick}>{this.props.buttonName}</Button>
        return this.props.link ?  <Link to={this.props.link}>{linkCardButton}</Link>
                     : cardButton;
    }

    render() {
        return(
            <div data-component={`${this.props.type}-portfolio-card`} className="-card-event mdl-card mdl-shadow--2dp">
                {this.props.title && 
                    <div className="mdl-card__title" data-component="card-title">
                        <h2 className="mdl-card__title-text">{this.props.title}</h2>
                    </div>
                }
                <div className="mdl-card__title mdl-card--expand">
                    {this.props.skillLevel &&
                        <div className="skill-level">
                            <div className="title">Niveau de maîtrise</div>
                            <CircularProgress
                                variant="determinate"
                                size={75}
                                value={this.state.completed} />
                            <div className="level">{this.state.skillLevelIndicator}</div>
                        </div>
                    }

                    <h4>
                       {this.props.content}
                    </h4>
                </div>
                 <div data-component="card-bottom" className="mdl-card__actions mdl-card--border">
                     {this.renderButtons()}
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
    type: ""
}