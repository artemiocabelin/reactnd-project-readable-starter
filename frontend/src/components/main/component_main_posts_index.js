import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './sub/component_sub_navigation'
import PostsList from './sub/component_sub_posts_list'
import PostDetail from './sub/component_sub_post_detail'

class PostsIndex extends Component {
    render() {
        return (
            <div className="row">
                <Switch>
                    <Route path="/:category/:id" component={PostDetail} />
                    <Route path="/:category" component={PostsList} />
                    <Route path="/" component={PostsList} />
                </Switch>
                <Navigation />
            </div>
        );
    }
}

export default PostsIndex;