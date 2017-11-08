import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class PostDetailBlock extends Component {
    render() {
        const { id, title, timestamp, author, category, body } = this.props.post

        return (
            <div>
                <p className="title"><Link to={`/posts/${id}`}>{title}</Link></p>
                <div className="basic-info">
                    <p>Submitted <Moment fromNow>{timestamp}</Moment></p>
                    <p>By: {author} to</p>
                    <p>Category: {category}</p>
                </div>
                <div>
                    <p className="post-content">{body}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
    }
}

export default connect(mapStateToProps)(PostDetailBlock);