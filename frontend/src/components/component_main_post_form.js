import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

import { createPost, fetchCategories, loadInitVals, fetchPosts } from '../actions'

class PostForm extends Component {

    componentDidMount() {
        const userId = this.setInitialId()
        this.props.loadInitVals({
            id: userId,
            timestamp: Date.now(),
            author: 'randomAuthor',
        }, this.props.post)
        this.props.fetchCategories()
    }

    setInitialId() {
        const { id } = this.props.match.params
        if(id) {
            return id
        } else {
            return uuidv1()
        }
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>*{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                {touched ? error : ''}
                </div>
            </div>
        );
    }

    renderTextArea(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return (
            <div className={className}>
                <label>*{field.label}</label>
                <textarea 
                    cols="30" 
                    rows="10"
                    className="form-control"
                    type="text"
                    {...field.input}
                ></textarea>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    renderSelectField(field) {
        const { meta : { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger': ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <select type="select" className="form-control form-select" {...field.input}>
                    <option value='' disabled>Select Category</option>
                    {this.createOptionField(this.props.categories)}
                </select>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    createOptionField(options) {
        return options.map((option) => {
            return (
                <option key={option.name} value={option.name}>{option.name}</option>
            );
        });
    }
    
    onSubmit(values) {
        const { createPost, history, match } = this.props
        createPost(values, (id) => {
            history.push(`/posts/${id}`);
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
                        <Field 
                            label="Title"
                            name="title" 
                            component={this.renderField}
                        />
                        <Field 
                            label="Text"
                            name="body" 
                            component={this.renderTextArea}
                        />
                        <Field 
                            label="Category"
                            name="category" 
                            component={this.renderSelectField.bind(this)}
                        />
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

function validate(values) {
    let errors = {}

    if (!values.title) {
        errors.title = 'Please enter a title';
    }
    if (!values.category) {
        errors.category = 'Please enter a category';
    }
    if (!values.body) {
        errors.body = 'Please enter a content';
    }

    return errors
}

function mapStateToProps(state, ownProps) {
    return { 
        categories: state.categories, 
        initialValues: state.load,
        post: state.posts[state.posts.findIndex(post => post.id === ownProps.match.params.id)]
    }
}

export default connect(mapStateToProps, { createPost, fetchCategories, fetchPosts, loadInitVals })(
    reduxForm({ validate, form: 'PostForm', enableReinitialize: true})(PostForm)
);