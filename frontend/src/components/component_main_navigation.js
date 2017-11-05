import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSortOrder } from '../actions';

class MainNavigation extends Component {
  state = {
    sortOrders: {
      top: {
        label: 'Top',
        isActive: false,
        order: '-voteScore'
      },
      newest: {
        label: 'Newest',
        isActive: false,
        order: '-timestamp'
      },
      oldest: {
        label: 'Oldest',
        isActive: false,
        order: 'timestamp'
      },
      controversial: {
        label: 'Controversial',
        isActive: false,
        order: 'voteScore'
      }
    }
  }

  activeButtonHistory = []
  
  componentDidMount() {
    this.setToActive('-voteScore', 'top');
  }

  renderSortButton(sortOrder, sortKey) {
    const { isActive, order, label } = sortOrder
    return (
      <li key={sortKey} className="nav-item">
        <a className={`nav-link ${isActive && 'active'}`} onClick={() => this.setToActive(order, sortKey)}>{label}</a>
      </li>
    )
  }

  setToActive(order, key) {
    this.props.setSortOrder(order);
    this.setOnlyThisButtonToActive(key);
  }

  setOnlyThisButtonToActive(buttonKey) {
    let newOrdersState = this.state.sortOrders;
    if(this.activeButtonHistory.length > 0) {
      const prevActiveButton = this.activeButtonHistory[this.activeButtonHistory.length - 1]
      newOrdersState[prevActiveButton]['isActive'] = false;
    }
    newOrdersState[buttonKey]['isActive'] = true;
    this.setState({sortOrders: newOrdersState});
    this.activeButtonHistory.push(buttonKey);
  }
  
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <Link className="navbar-brand" to="/">Readable</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {_.map(this.state.sortOrders, (sortOrder, sortKey) => this.renderSortButton(sortOrder, sortKey))}
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

export default connect(null, { setSortOrder })(MainNavigation);