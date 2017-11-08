import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

import { loadInitVals, createComment, createNewInitVals } from '../../../../../actions'

class CommentForm extends Component {

    componentWillReceiveProps(nextProps) {
        const { comments } = nextProps
        if (this.props.comments !== comments) {
            this.props.createNewInitVals({
                id:  uuidv1(),
                timestamp: Date.now(),
                author: 'randomAuthor',
                parentId: this.props.parentId
            })
        }
    }


    setInitialId() {
        const id = this.props.parentId
        if(id) {
            return id
        } else {
            return uuidv1()
        }
    }

    renderTextArea(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return (
            <div className={className}>
                <textarea 
                    cols="60" 
                    rows="5"
                    className="form-control"
                    {...field.input}
                ></textarea>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }
    
    onSubmit(values) {
        this.props.createComment(values);
        this.props.dispatch(reset('NewCommentForm'))
        this.props.createNewInitVals({
                id:  uuidv1(),
                timestamp: Date.now(),
                author: 'randomAuthor',
                parentId: this.props.parentId
            })
    }
    
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="comment-form">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field 
                        name="body" 
                        component={this.renderTextArea}
                    />
                    <button className="btn btn-primary d-block">Submit</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    let errors = {}
    if (!values.body) {
        errors.body = 'Please enter content';
    }

    return errors
}

function mapStateToProps(state) {
    return { 
        comments: state.comments,
        initialValues: state.initVals
    }
}

export default connect(mapStateToProps, { loadInitVals, createComment, createNewInitVals })(
    reduxForm({ validate, enableReinitialize: true})(CommentForm)
);