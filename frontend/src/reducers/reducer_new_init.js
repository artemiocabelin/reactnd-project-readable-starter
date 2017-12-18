import * as types from '../actions/types'

export default function (state = {}, action) {
    switch(action.type) {
        case types.CREATE_NEW_INIT_VALS:
            return action.payload

        default:
            return state
    }
}