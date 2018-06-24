import React from "react";
import "./style.scss";

export class Article extends React.Component {

    render() {
        const {headline, content, renderButtonSkillsSecction} = this.props
        return (
            <div data-component="article">
                {
                    headline && 
                    <h2 className="article-headline">{headline}</h2>
                }
                <div className="article-content">
                    {content}
                    {
                        renderButtonSkillsSecction && 
                        <div>
                            <br/>
                            {renderButtonSkillsSecction()}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

Article.defaultProps = {
    content: () => <div>Content here</div>
}