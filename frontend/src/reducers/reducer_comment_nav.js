import { SET_COMMENT_NAV_STATUS } from '../actions'


let commentNav = {
      isActive: false,
      label: 'Comments'
    }

export default function (state = commentNav, action) {
    switch(action.type) {
        case SET_COMMENT_NAV_STATUS:
            return {...state, isActive : action.payload}

        default:
            return state
    }
}