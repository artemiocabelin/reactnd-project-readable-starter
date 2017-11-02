import React, { Component } from 'react';
import PostLink from './component_sub_post_link'

class SubContent extends Component {
    render() {
        return (
                <div className="col-md-9">
                    <p className="post-list">All Posts</p>
                    <PostLink />
                    <PostLink />
                </div>
        );
    }
}

export default SubContent;