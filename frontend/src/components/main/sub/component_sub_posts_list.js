import _ from 'lodash';
import sortBy from 'sort-by';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../../actions';
import PostLink from './blocks/component_post_link'

class SubContent extends Component {
    componentDidMount() {
        const { category } = this.props.match.params
        category ? this.props.fetchPosts(category) : this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps) {
        const { category } = nextProps.match.params
        if (this.props.match.params.category !== category) {
            this.props.fetchPosts(category)
        }
    }
    
    renderPostList(postList) {
        return _.map(this.sortPostList(postList, this.props.order), (post, postKey) => this.renderPost(post, postKey))
    }

    sortPostList(postList, sortOrder) {
        return postList.sort(sortBy(sortOrder));
    }

    renderPost(post, postKey) {
        return (
            <PostLink key={post.id} post={post} />
        )
    }

    render() {
        return (
            <div className="col-md-9">
                <p className="post-list">All Posts</p>
                {this.renderPostList(this.props.posts)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts, 
        order: state.order
    }
}

export default connect(mapStateToProps, { fetchPosts })(SubContent);