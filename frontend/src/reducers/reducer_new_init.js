import { CREATE_NEW_INIT_VALS } from '../actions'

export default function (state = {}, action) {
    switch(action.type) {
        case CREATE_NEW_INIT_VALS:
            return action.payload

        default:
            return state
    }
}