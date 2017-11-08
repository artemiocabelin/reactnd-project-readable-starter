import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';

import { createComment, createNewInitVals } from '../../actions'
import validate from './validations/validation_comment_form'
import { createInitialValues } from './helpers/helper_form_service'
import { renderNewCommentTextArea } from './helpers/helper_form_fields'

class CommentForm extends Component {

    componentWillReceiveProps(nextProps) {
        const { comments } = nextProps
        if (this.props.comments !== comments) {
            this.loadInitialValues()
        }
    }
    
    onSubmit(values) {
        this.props.createComment(values);
        this.props.dispatch(reset('NewCommentForm'))
        this.loadInitialValues()
    }

    loadInitialValues() {
        const data = createInitialValues(null, this.props.parentId)
        this.props.createNewInitVals(data)
    }
    
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="comment-form">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field 
                        name="body" 
                        component={renderNewCommentTextArea}
                    />
                    <button className="btn btn-primary d-block">Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        comments: state.comments,
        initialValues: state.initVals
    }
}

export default connect(mapStateToProps, { createComment, createNewInitVals })(
    reduxForm({ validate, enableReinitialize: true})(CommentForm)
);