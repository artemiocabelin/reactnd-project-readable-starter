import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions'

class SubNavigation extends Component {
    componentDidMount() {
        this.props.fetchCategories()
    }

    renderCategory(category) {
        return (
            <li key={category.name}>
                <Link to={`/${category.path}`} >{category.name}</Link>
            </li>
        )
    }
    
    render() {
        return (
            <div className="col-md-3 sub-nav">
                <Link to="/posts/new" className="btn btn-primary submit-link">Submit New Post</Link>
                <p>Categories:</p>
                <ul> 
                    <li>
                        <Link to="/">All</Link>
                    </li>
                    {_.map(this.props.categories, this.renderCategory.bind(this))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories : state.categories
    }
}

export default connect(mapStateToProps, { fetchCategories })(SubNavigation);