import _ from 'lodash'
import * as types from '../actions/types'

export default function (state = [], action) {
    switch(action.type) {
        case types.FETCH_POSTS:
            return action.payload.data

        case types.VOTE_SCORE:
            let newState = [ ...state ]
            let index = state.findIndex(post => post.id === action.payload.id)
            newState[index] = action.payload
            return newState

        case types.CREATE_POST:
            newState = [ ...state ]
            let { id } = action.payload
            if(_.some(state, {'id':id})) {
                index = state.findIndex(post => post.id === id)
                newState[index] = action.payload
                return newState
            }
            return state.concat([action.payload])

        case types.DELETE_POST:
            newState = [ ...state ]
            return newState.filter(post => post.id !== action.payload.id)

        default:
            return state
    }
}