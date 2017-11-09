import _ from 'lodash'
import sortBy from 'sort-by';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPost, fetchComments, setCommentNavStatus } from '../../../actions';
import NewCommentForm from '../../forms/component_comment_form_new'
import CommentBlock from './blocks/component_comment_block'
import VoteBlock from './blocks/component_post_vote_block'
import OptionBlock from './blocks/component_post_option_block'
import DetailBlock from './blocks/component_post_detail_block'

class SubPost extends Component {
    
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getPost(id)
        this.props.fetchComments(id)
        this.props.setCommentNavStatus(true)
    }

    componentWillUnmount() {
        this.props.setCommentNavStatus(false)
    }

    renderComment(comment) {
        return ( <CommentBlock key={comment.id} comment={comment}/> )
    }

    sortCommentList(commentList, sortOrder) {
        return commentList.sort(sortBy(sortOrder));
    }

    render() {
        const {id } = this.props.post
        
        if(!id) {
            return (<div className="col-md-9 text-center no-comments">Post Not Found</div>)
        }

        return (
            <div className="col-md-9">
                <div className="post-link link-top">
                    <VoteBlock />
                    <div className="right-col">
                        <DetailBlock />
                        <OptionBlock history={this.props.history} />
                    </div>
                </div>
                <NewCommentForm form={'NewCommentForm'} parentId={this.props.match.params.id} />
                <div className="comment-list">
                    <p>all {this.props.comments.length} {this.props.comments.length > 1 ? 'comments' : 'comment'}</p>
                    {this.props.comments.length > 0 ? _.map(this.sortCommentList(this.props.comments, '-voteScore'), this.renderComment.bind(this)) : (<div className="no-comments">No comments</div>)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
        comments: state.comments,
    }
}

export default connect(mapStateToProps, { getPost, fetchComments, setCommentNavStatus })(SubPost);