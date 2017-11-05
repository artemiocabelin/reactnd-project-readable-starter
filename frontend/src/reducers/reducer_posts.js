import _ from 'lodash'
import { FETCH_POSTS, VOTE_SCORE, CREATE_POST } from '../actions'

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_POSTS:
            return action.payload.data

        case VOTE_SCORE:
            let newState = [ ...state ]
            let index = state.findIndex(post => post.id === action.payload.data.id)
            newState[index] = action.payload.data
            return newState

        case CREATE_POST:
            newState = [ ...state ]
            let { id } = action.payload
            if(_.some(state, {'id':id})) {
                index = state.findIndex(post => post.id === id)
                newState[index] = action.payload
                return newState
            }
            return state.concat([action.payload])

        default:
            return state
    }
}