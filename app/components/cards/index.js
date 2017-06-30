import React, {PureComponent} from "react";
import Button from 'material-ui/Button';
import "./style.scss";

export class Card extends PureComponent {
    render() {
        return(
            <div data-component="portfolio-card" className="demo-card-event mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title" data-component="card-title">
                    <h2 className="mdl-card__title-text">{this.props.title}</h2>
                </div>
                <div className="mdl-card__title mdl-card--expand">
                    <h4>
                       {this.props.content}
                    </h4>
                </div>
                 <div data-component="card-bottom" className="mdl-card__actions mdl-card--border">
                    <Button color="primary" onClick={this.props.onClick}>Lire plus</Button>
                </div>
            </div>
        )
    }
}