import React, { Component } from 'react';
import { connect } from 'react-redux';
import { votePost } from '../../../../actions'

class VoteBlock extends Component {
    render() {
        const { post: {id, voteScore }, votePost} = this.props

        return (
            <div className="middle-col">
                <a onClick={()=> votePost(id, "upVote")} className="clickable"><i className="arrow up"></i></a>
                <div className="score">{voteScore}</div>
                <a onClick={()=> votePost(id, "downVote")} className="clickable"><i className="arrow down"></i></a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.post
    }
}

export default connect(mapStateToProps, { votePost } )(VoteBlock);