import * as types from '../actions/types'

export default function (state = {}, action) {
    switch(action.type) {
        case types.FETCH_POST:
            return action.payload.data

        case types.VOTE_POST_SCORE:
            return { ...state, voteScore : action.payload.voteScore }

        default:
            return state
    }
}