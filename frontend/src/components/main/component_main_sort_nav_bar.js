import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSortOrder } from '../../actions';
import { SORT_ORDERS } from './configurations/config_sort_nav_bar'

class SortNavBar extends Component {
  state = {
    sortOrders: {}
  }

  activeButtonHistory = []

  componentWillMount() {
    this.setState({sortOrders: SORT_ORDERS })
  }
  
  componentDidMount() {
    if(Object.keys(this.state.sortOrders).length > 0) {
      this.setToActive('-voteScore', 'top');
    }
  }

  renderSortButton(sortOrder, sortKey) {
    const { isActive, order, label } = sortOrder
    return (
      <li key={sortKey} className="nav-item">
        <a className={`nav-link ${isActive && 'active'}`} onClick={() => order && this.setToActive(order, sortKey)}>{label}</a>
      </li>
    )
  }

  setToActive(order, key) {
    this.props.setSortOrder(order);
    let { sortOrders } = this.state
    this.deactivatePreviousActiveButton(sortOrders)
    this.activateNextActiveButton(sortOrders, key)
  }

  deactivatePreviousActiveButton(state) {
    if(this.activeButtonHistory.length > 0) {
      const prevActiveButton = this.activeButtonHistory[this.activeButtonHistory.length - 1]
      state[prevActiveButton]['isActive'] = false;
    }
  }

  activateNextActiveButton(state, buttonKey) {
    state[buttonKey]['isActive'] = true;
    this.setState({sortOrders: state});
    this.activeButtonHistory.push(buttonKey);
  }
  
  render() {
    const { sortOrders } = this.state
    const { commentNav } = this.props

    return (
      <nav className="navbar navbar-light bg-faded">
        <Link className="navbar-brand" to="/">Readable</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            { commentNav.isActive ? this.renderSortButton(commentNav, 'commentNav') : _.map(sortOrders, (sortOrder, sortKey) => this.renderSortButton(sortOrder, sortKey))}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    commentNav : state.commentNav
  }
}

export default connect(mapStateToProps, { setSortOrder })(SortNavBar);