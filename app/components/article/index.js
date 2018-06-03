import React from "react";
import "./style.scss";

export class Article extends React.Component {

    render() {
        const {headline, content} = this.props
        return (
            <div data-component="article">
                <h2 className="article-headline">{headline}</h2>
                <div className="article-content">
                    {content}
                </div>
            </div>
        );
    }
}

Article.defaultProps = {
    headline: "This is a headline",
    content: () => <div>Content here</div>
}