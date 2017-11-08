export default function validate(values) {
    let errors = {}
    if (!values.body) {
        errors.body = 'Please enter content';
    }

    return errors
}