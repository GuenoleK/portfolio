import {Link} from "react-router"
import React, {PureComponent} from "react";

export class HeaderLink extends PureComponent {
    render() {
        return(
            <Link {...this.props} activeStyle={{ backgroundColor: 'white', color: '#009688' }}/>
        )
    }
}