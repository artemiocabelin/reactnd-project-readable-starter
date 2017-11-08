import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost, fetchCategories, loadInitVals, fetchPosts } from '../../actions'
import validate from './validations/validation_post_form'
import { FIELDS } from './configurations/config_post_form'
import { createInitialValues } from './helpers/helper_form_service'

class PostForm extends Component {

    componentDidMount() {
        this.setInitialValues()
        this.props.fetchCategories()
    }

    setInitialValues() {
        const { loadInitVals, post } = this.props
        const { id } = this.props.match.params
        const data = createInitialValues(id)
        loadInitVals(data, post)
    }

    setFormField(fieldConfig, field) {
        return (
            <Field key={field} categories={this.props.categories} label={fieldConfig.label} name={field} component={fieldConfig.render}></Field>
        );    
    }
    
    onSubmit(values) {
        const { createPost, history, match } = this.props
        createPost(values, (id, category) => {
            history.push(`/${category}/${id}`);
        }, match.params.id);
    }
    
    render() {
        const { handleSubmit } = this.props;
        
        return (
            <div className="form-wrapper">
                <div className="container-fluid close-parent">
                    <Link to="/" className="close"></Link>
                    <h1 className="text-center">Post</h1>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        {_.map(FIELDS, this.setFormField.bind(this))}
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { categories, load, posts } = state
    return { 
        categories: categories, 
        initialValues: load,
        post: posts[posts.findIndex(post => post.id === ownProps.match.params.id)]
    }
}

export default connect(mapStateToProps, { createPost, fetchCategories, fetchPosts, loadInitVals })(
    reduxForm({ validate, form: 'PostForm', enableReinitialize: true})(PostForm)
);