import { LOAD_INIT_VALS } from '../actions'

export default function (state = {}, action) {
    switch(action.type) {
        case LOAD_INIT_VALS:
            return action.payload

        default:
            return state
    }
}