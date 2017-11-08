import _ from 'lodash'
import { FETCH_COMMENTS, CREATE_COMMENT, VOTE_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../actions'

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_COMMENTS:
            return action.payload.data

        case CREATE_COMMENT:
            return state.concat([action.payload])

        case EDIT_COMMENT:
            let newState = [ ...state ]
            let { id } = action.payload
            if(_.some(state, {'id':id})) {
                let index = state.findIndex(comment => comment.id === id)
                newState[index] = action.payload
                return newState
            }
            return state.concat([action.payload])

        case DELETE_COMMENT:
            newState = [ ...state ]
            return newState.filter(comment => comment.id !== action.payload.id)

        case VOTE_COMMENT:
            newState = [ ...state ]
            let index = state.findIndex(comment => comment.id === action.payload.data.id)
            newState[index] = action.payload.data
            return newState

        default:
            return state
    }
}