import React, {PureComponent} from "react";
import Button from 'material-ui/Button';
import {Link} from "react-router";
import "./style.scss";

export class Card extends PureComponent {

    renderButton() {
        const cardButton = <Button color="primary" onClick={this.props.onClick}>{this.props.buttonName}</Button>
        const linkCardButton = <Button raised color="primary" onClick={this.props.onClick}>{this.props.buttonName}</Button>
        return this.props.link ?  <Link to={this.props.link}>{linkCardButton}</Link>
                     : cardButton;
    }

    render() {
        return(
            <div data-component="portfolio-card" className="demo-card-event mdl-card mdl-shadow--2dp">
                {this.props.title && 
                    <div className="mdl-card__title" data-component="card-title">
                        <h2 className="mdl-card__title-text">{this.props.title}</h2>
                    </div>
                }
                <div className="mdl-card__title mdl-card--expand">
                    <h4>
                       {this.props.content}
                    </h4>
                </div>
                 <div data-component="card-bottom" className="mdl-card__actions mdl-card--border">
                     {this.renderButton()}
                </div>
            </div>
        )
    }
}