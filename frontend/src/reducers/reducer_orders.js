import * as types from '../actions/types'

export default function (state = '', action) {
    switch(action.type) {
        case types.SET_SORT_ORDER:
            return action.payload

        default:
            return state
    }
}