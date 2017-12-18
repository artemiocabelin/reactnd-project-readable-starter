import * as types from '../actions/types'

let commentNav = {
      isActive: false,
      label: 'Comments'
    }

export default function (state = commentNav, action) {
    switch(action.type) {
        case types.SET_COMMENT_NAV_STATUS:
            return {...state, isActive : action.payload}

        default:
            return state
    }
}