import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { votePost, deletePost } from '../actions'

class PostLink extends Component {
    render() {
        const { post: { id, voteScore, title, author, category, commentCount, timestamp, rank}, votePost, deletePost } = this.props
        return (
            <div className="post-link">
                <span className="rank">{rank}</span>
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
                    <div className="button-list">
                        <Link to={`/posts/${id}`}>{commentCount} comments</Link>
                        <Link to={`/posts/edit/${id}`} className="btn btn-link">Edit</Link>
                        <button onClick={() => deletePost(id)} className="btn btn-link">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { votePost, deletePost })(PostLink);