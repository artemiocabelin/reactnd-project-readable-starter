import Moment from 'react-moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPost, votePost } from '../actions';

class SubPost extends Component {
    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    }
    
    render() {
        const { post: {id, voteScore, title, timestamp, author, category, body, commentCount }, votePost} = this.props
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
                            <span>{commentCount} {commentCount > 1 ? 'comments' : 'comment'}</span>
                            <Link to={`/posts/edit/${id}`} className="btn btn-link">Edit</Link>
                            <button className="btn btn-link">Delete</button>
                        </div>
                    </div>

                </div>
                <div className="comment-form">
                    <form>
                        <textarea name="" id="" cols="60" rows="5"></textarea>
                        <button className="btn btn-primary d-block">Submit</button>
                    </form>
                </div>
                <div className="comment-list">
                    <p>all 212 comments</p>
                    <p className="smaller-font">Sorted by: Best</p>
                    <div className="comment-block">
                        <div className="middle-col">
                            <div className="arrow-up"><i className="arrow up"></i></div>
                            <p>*</p>
                            <div className="arrow-down"><i className="arrow down"></i></div>
                        </div>
                        <div className="content-col">
                            <p>[-] random_user * 17 points 2 hours ago</p>
                            <p>comment content here</p>
                            <p>comment content here</p>
                            <p>comment content here</p>
                            <div className="button-list">
                                <button className="btn btn-link">Reply</button>
                                <button className="btn btn-link">Edit</button>
                                <button className="btn btn-link">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="comment-block">
                        <div className="middle-col">
                            <div className="arrow-up"><i className="arrow up"></i></div>
                            <p>*</p>
                            <div className="arrow-down"><i className="arrow down"></i></div>
                        </div>
                        <div className="content-col">
                            <p>[-] random_user * 17 points 2 hours ago</p>
                            <p>comment content here</p>
                            <p>comment content here</p>
                            <p>comment content here</p>
                            <div className="button-list">
                                <button className="btn btn-link">Reply</button>
                                <button className="btn btn-link">Edit</button>
                                <button className="btn btn-link">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post
    }
}

export default connect(mapStateToProps, { getPost, votePost })(SubPost);