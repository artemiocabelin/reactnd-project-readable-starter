import React from 'react'

export function renderField(field) {
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

export function renderTextArea(field) {
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

export function renderSelectField(field) {
        const { meta : { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger': ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <select type="select" className="form-control form-select" {...field.input}>
                    <option value='' disabled>Select Category</option>
                    {createOptionField(field.categories)}
                </select>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

function createOptionField(options) {
        return options.map((option) => {
            return (
                <option key={option.name} value={option.name}>{option.name}</option>
            );
        });
    }


export function renderNewCommentTextArea(field) {
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