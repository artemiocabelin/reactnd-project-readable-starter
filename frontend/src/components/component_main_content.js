import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import SubNavigation from './component_content_nav'
import SubContent from './component_content_sub'
import SubPost from './component_content_post'

class MainContent extends Component {
    render() {
        return (
            <div className="row">
                <Route path="/posts/:id" component={SubPost} />
                <Route exact path="/" component={SubContent} />
                <SubNavigation />
            </div>
        );
    }
}

export default MainContent;