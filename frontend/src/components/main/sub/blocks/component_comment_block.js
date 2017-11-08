import Moment from 'react-moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { voteComment, deleteComment } from '../../../../actions';
import EditCommentForm from '../../../forms/component_comment_form_edit'

class Comment extends Component {
    state = {
        editMode: false,
        replyMode: false
    }

    flipEditMode() {
        const { editMode } = this.state
        editMode ? this.setState({editMode: false}) : this.setState({editMode: true})
    }

    renderEditCommentForm(comment) {
        return (
            <EditCommentForm form={`editCommentForm_${comment.id}`} initialValues={comment} flipEditMode={this.flipEditMode.bind(this)} />
        )
    }

    renderCommentMenu() {
        const { comment } = this.props
        const { editMode } = this.state
        if (!editMode) {
            return (
                <div className="button-list">
                    <button onClick={this.flipEditMode.bind(this)} className="btn btn-link">Edit</button>
                    <button onClick={() => this.props.deleteComment(comment.id)} className="btn btn-link">Delete</button>
                </div>
            )
        }
    }
    
    render() {
        const { comment, voteComment } = this.props
        const { editMode } = this.state
        return (
            <div className="comment-block">
                <div className="middle-col">
                    <a onClick={()=> voteComment(comment.id, "upVote")} className="clickable"><i className="arrow up"></i></a>
                    <p>*</p>
                    <a onClick={()=> voteComment(comment.id, "downVote")} className="clickable"><i className="arrow down"></i></a>
                </div>
                <div className="content-col">
                    <p>[-] {comment.author} * {comment.voteScore} {comment.voteScore > 1 ? 'points' : 'point'} <Moment fromNow>{comment.timestamp}</Moment></p>
                    {editMode ? this.renderEditCommentForm(comment) : (<p>{comment.body}</p>)}
                    {this.renderCommentMenu()}
                </div>
            </div>
        )
    }
}

export default connect(null, { voteComment, deleteComment })(Comment);