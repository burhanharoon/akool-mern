import {
    USER_INFO_SUCCESS,
} from '../constants/userConstants'

export const userInfoReducer = (state = null, action) => {
    switch (action.type) {
        case USER_INFO_SUCCESS:
            return { user: action.payload }
        default:
            return state
    }
}