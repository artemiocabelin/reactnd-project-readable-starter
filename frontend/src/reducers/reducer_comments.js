import _ from 'lodash'
import * as types from '../actions/types'

export default function (state = [], action) {
    switch(action.type) {
        case types.FETCH_COMMENTS:
            return action.payload.data

        case types.CREATE_COMMENT:
            return state.concat([action.payload])

        case types.EDIT_COMMENT:
            let newState = [ ...state ]
            let { id } = action.payload
            if(_.some(state, {'id':id})) {
                let index = state.findIndex(comment => comment.id === id)
                newState[index] = action.payload
                return newState
            }
            return state.concat([action.payload])

        case types.DELETE_COMMENT:
            newState = [ ...state ]
            return newState.filter(comment => comment.id !== action.payload.id)

        case types.VOTE_COMMENT:
            newState = [ ...state ]
            let index = state.findIndex(comment => comment.id === action.payload.data.id)
            newState[index] = action.payload.data
            return newState

        default:
            return state
    }
}