import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainNavigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <Link className="navbar-brand" to="/">Readable</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              Sort By:
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/posts/1">Top</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts/1">Newest</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts/1">Oldest</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts/1">Controversial</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 pull-right">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default MainNavigation;