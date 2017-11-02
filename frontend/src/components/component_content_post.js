import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PostLink from './component_sub_post_link'

class SubPost extends Component {
    render() {
        return (
            <div className="col-md-9">
                <div className="post-link link-top">
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
                        <div>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                            <p>...Content goes here</p>
                        </div>
                        <div className="button-list">
                            <span>212 comments</span>
                            <button className="btn btn-link">Edit</button>
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
                        <div className="middle-col border-on">
                            <div className="arrow-up"><i className="arrow up"></i></div>
                            <p>*</p>
                            <div className="arrow-down"><i className="arrow down"></i></div>
                        </div>
                        <div className="content-col border-on">
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

export default SubPost;