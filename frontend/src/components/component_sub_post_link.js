import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostLink extends Component {
    render() {
        return (
            <div className="post-link">
                <span className="rank">1</span>

                <div className="middle-col">
                    <div className="arrow-up"><i className="arrow up"></i></div>
                    <div className="score">123</div>
                    <div className="arrow-down"><i className="arrow down"></i></div>
                </div>
                <div className="right-col">
                    <p className="title"><Link to="/posts/1">This is the Title of the Post</Link></p>
                    <div className="basic-info">
                        <p>Submitted 4 hours ago</p>
                        <p>By: Random User to</p>
                        <p>Category: React</p>
                    </div>
                    <div className="button-list">
                        <span>212 comments</span>
                        <button className="btn btn-link">Edit</button>
                        <button className="btn btn-link">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostLink;