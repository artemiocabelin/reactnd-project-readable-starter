import { renderField, renderSelectField, renderTextArea } from '../helpers/helper_form_fields'

export const FIELDS = {
        title : {
            label: 'Title',
            type: 'input',
            render: (field) => renderField(field)
        },
        body : {
            label: 'Content',
            type: 'textarea',
            render: (field) => renderTextArea(field)
        },
        category : {
            label: 'Category',
            type: 'select',
            render: (field) => renderSelectField(field)
        }
    }