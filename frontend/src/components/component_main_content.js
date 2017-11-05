import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import SubNavigation from './component_content_nav'
import SubContent from './component_content_sub'
import SubPost from './component_content_post'

class MainContent extends Component {
    render() {
        return (
            <div className="row">
                <Switch>
                    <Route path="/posts/:id" component={SubPost} />
                    <Route path="/:category" component={SubContent} />
                    <Route path="/" component={SubContent} />
                </Switch>
                <SubNavigation />
            </div>
        );
    }
}

export default MainContent;