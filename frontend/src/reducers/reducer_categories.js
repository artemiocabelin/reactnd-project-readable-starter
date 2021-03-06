import * as types from '../actions/types'

export default function (state = [], action) {
    switch(action.type) {
        case types.FETCH_CATEGORIES:
            return action.payload.data.categories

        default:
            return state
    }
}