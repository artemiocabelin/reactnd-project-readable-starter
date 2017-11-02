import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubNavigation extends Component {
    render() {
        return (
                <div className="col-md-3 sub-nav">
                    <Link to="/posts/new" className="btn btn-primary submit-link">Submit New Post</Link>
                    <p>Categories:</p>
                    <ul> 
                        <li>
                            <Link to="/">All</Link>
                        </li>
                        <li>
                            <Link to="/react">React</Link>
                        </li>
                        <li>
                            <Link to="/redux">Redux</Link>
                        </li>
                        <li>
                            <Link to="/udacity">Udacity</Link>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default SubNavigation;