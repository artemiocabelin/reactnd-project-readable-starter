import _ from 'lodash'
import { FIELDS } from '../configurations/config_post_form';

export default function validate(values) {
    let errors = {}

    _.each(FIELDS, (type, field) => {
        if (!values[field]) {
            errors[field] = `Please enter ${type.label}`;
        }
    })

    return errors
}