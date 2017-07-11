import React from "react";
import "./style.scss";

export class ComingSoon extends React.Component {

    render() {
        const {title, description} = this.props
        console.log(title, description);
        return (
            <div data-component="coming-soon">
                <i className="material-icons">build</i>
                <div>
                    <span className="coming-soon-title">{title}</span>
                    <span className="coming-soon-description">{description}</span>
                </div>
            </div>
        );
    }
}

ComingSoon.defaultProps = {
    title: "Coming soon",
    description: "Coming soon on thig page"
}