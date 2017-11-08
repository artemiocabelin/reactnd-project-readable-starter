import _ from 'lodash'
import sortBy from 'sort-by';
import Moment from 'react-moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPost, votePost, fetchComments, deletePost, createNewInitVals, setCommentNavStatus } from '../actions';
import CommentForm from './component_new_comment_form'
import Comment from './component_comment'

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
        return ( <Comment key={comment.id} comment={comment}/> )
    }

    sortCommentList(commentList, sortOrder) {
        return commentList.sort(sortBy(sortOrder));
    }

    render() {
        const { post: {id, voteScore, title, timestamp, author, category, body }, votePost, deletePost} = this.props
        
        if(!id) {
            return (<div className="col-md-9 text-center no-comments">Post Not Found</div>)
        }

        return (
            <div className="col-md-9">
                <div className="post-link link-top">
                    <div className="middle-col">
                        <a onClick={()=> votePost(id, "upVote")} className="clickable"><i className="arrow up"></i></a>
                        <div className="score">{voteScore}</div>
                        <a onClick={()=> votePost(id, "downVote")} className="clickable"><i className="arrow down"></i></a>
                    </div>
                    <div className="right-col">
                        <p className="title"><Link to={`/posts/${id}`}>{title}</Link></p>
                        <div className="basic-info">
                            <p>Submitted <Moment fromNow>{timestamp}</Moment></p>
                            <p>By: {author} to</p>
                            <p>Category: {category}</p>
                        </div>
                        <div>
                            <p className="post-content">{body}</p>
                        </div>
                        <div className="button-list">
                            <span>{this.props.comments.length} {this.props.comments.length > 1 ? 'comments' : 'comment'}</span>
                            <Link to={`/posts/edit/${id}`} className="btn btn-link">Edit</Link>
                            <button onClick={() => deletePost(id, this.props.history.push('/'))} className="btn btn-link">Delete</button>
                        </div>
                    </div>
                </div>
                <CommentForm form={'NewCommentForm'} parentId={this.props.match.params.id} />
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

export default connect(mapStateToProps, { getPost, votePost, fetchComments, deletePost, createNewInitVals, setCommentNavStatus })(SubPost);