import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { editComment } from '../../../../../actions'

class EditCommentForm extends Component {

    renderTextArea(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return (
            <div className={className}>
                <textarea 
                    className="text-area"
                    rows="4"
                    {...field.input}
                ></textarea>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }
    
    onSubmit(values) {
        this.props.editComment(values);
        this.props.flipEditMode();
    }
    
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="edit-comment-form">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field 
                        name="body" 
                        component={this.renderTextArea}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-danger" onClick={() => this.props.flipEditMode()}>Cancel</button>
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

export default connect(null, { editComment })(
    reduxForm({ validate, enableReinitialize: true})(EditCommentForm)
);