import { FETCH_POST, VOTE_POST_SCORE } from '../actions'

export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_POST:
            return action.payload.data

        case VOTE_POST_SCORE:
            return { ...state, voteScore : action.payload.voteScore }

        default:
            return state
    }
}