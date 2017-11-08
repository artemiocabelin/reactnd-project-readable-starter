import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deletePost } from '../../../../actions'

class OptionBlock extends Component {
    render() {
        const { post: { id }, deletePost} = this.props

        return (
            <div className="button-list">
                <span>{this.props.comments.length} {this.props.comments.length > 1 ? 'comments' : 'comment'}</span>
                <Link to={`/posts/edit/${id}`} className="btn btn-link">Edit</Link>
                <button onClick={() => deletePost(id, this.props.history.push('/'))} className="btn btn-link">Delete</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
        comments: state.comments,
    }
}

export default connect(mapStateToProps, { deletePost } )(OptionBlock);