import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSortOrder } from '../../actions';

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
        <a className={`nav-link ${isActive && 'active'}`} onClick={() => order && this.setToActive(order, sortKey)}>{label}</a>
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

export default connect(mapStateToProps, { setSortOrder })(MainNavigation);